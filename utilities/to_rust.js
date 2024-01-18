"use strict";
const testFolder = './src/components/';
const fs = require('fs');
const ejs = require("ejs");
fs.readdir(testFolder, (err, files) => {
    files.forEach(file => {
        let out = compile(file);
        let name = file.substring(0, file.length - 4).replaceAll('-', '_');
        fs.writeFileSync('./src/yew_component/' + name + '.rs', out);
    });
    let mods = files.map(x => {
        let name = x.substring(0, x.length - 4).replaceAll('-', '_');
        return 'pub mod ' + name + ';';
    });
    let mod = mods.join('\n');
    fs.writeFileSync('./src/yew_component/mod.rs', mod);
});
function readContent(file) {
    let a = fs.readFileSync(file, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file: ', err);
            return "";
        }
        return data;
    });
    return a;
}
function compile(file) {
    let content = readContent(testFolder + file);
    let comp_name = camelCase(file);
    let out = templateRust().replace("@fn", fnName(file)).replaceAll("@name", comp_name);
    let ctn = getVar(content);
    let va = ctn[0];
    if (va.length <= 0) {
        out = out.replace("@struct", "");
        out = out.replace("@pr", "");
    }
    else {
        out = out.replace('@struct', createStruct(va, comp_name));
        out = out.replace("@pr", "pr:&" + comp_name + 'Props');
    }
    let html = toHtml(content, va, ctn[1]);
    out = out.replace('@html', html);
    // console.log(out);
    return out;
}
function createStruct(va, compName) {
    if (va.length <= 0) {
        return '';
    }
    let x = `#[derive(Properties,Clone,Debug,PartialEq)]
    pub struct @nameProps{
        @props
    }
    `;
    //remove duplicate var
    let props = va.map(vx => {
        return snackCase(vx.name) + ':' + vx.type;
    });
    let v = removeDup(props);
    x = x.replace('@props', v.join() + ',');
    x = x.replace('@name', compName);
    return x;
}
function removeDup(src) {
    return [...new Set(src)];
}
function templateRust() {
    let a = `use yew::prelude::*;

    @struct

    #[function_component(@name)]
    fn @fn(@pr)->Html{

        html!{
            <>
            @html
            </>
        }
    }
    `;
    return a;
}
function camelCase(str) {
    let n = str.replace(".ejs", "");
    let nams = n.split('-').map((x) => {
        let a = x.charAt(0).toUpperCase() + x.slice(1);
        return a;
    });
    return nams.join("");
}
function fnName(str) {
    let n = str.replace(".ejs", "");
    return n.replaceAll("-", "_");
}
function toHtml(str, va, attr) {
    //replace all variable outside literal
    let content = str;
    let offset = 0;
    for (let i = 0; i < va.length; i++) {
        if (va[i].is_loaded) {
            continue;
        }
        if (va[i].attr_pos == -1) {
            let val = "{pr." + va[i].name + ".clone()}";
            content = replaceRange(content, val, va[i].start + offset, va[i].end + offset);
            offset = offset + val.length - (va[i].end - va[i].start) - 1;
            console.log("val length: " + val.length + " offset: " + offset);
        }
        else {
            let a = attr[va[i].attr_pos];
            let val = createAttr(va[i].attr_pos, i, va, attr);
            content = replaceRange(content, val, a.value_start + offset - 1, a.end + offset);
            offset = offset + val.length - (a.end - a.value_start + 1) - 1;
            console.log("val length: " + val.length + " offset: " + offset);
        }
    }
    // console.log(offset);
    // console.log(content);
    //replace first <% with <
    content = content.replace('<%', '<');
    // replace las %> with >
    let pos_last = content.lastIndexOf('%>');
    if (pos_last >= 0) {
        content = content.substring(0, pos_last - 1) + '/>';
    }
    //replace all comment
    content = content.replaceAll('<!--', '/*');
    content = content.replaceAll('-->', '*/');
    return content;
}
function createAttr(posAttr, offset, v, attr) {
    let as_var = [];
    let idx = 0;
    for (let i = offset; i < v.length; i++) {
        if (posAttr == v[i].attr_pos) {
            as_var[idx] = v[i];
            idx = idx + 1;
            v[i].is_loaded = true;
        }
    }
    let str = attr[posAttr].value;
    let s = '{format!("';
    let of = 0;
    let val = [];
    for (let i = 0; i < as_var.length; i++) {
        val[i] = 'pr.' + as_var[i].name + '.clone()';
        let x = '{}';
        str = replaceRange(str, x, as_var[i].start - attr[posAttr].value_start + of, as_var[i].end - attr[posAttr].value_start + of);
        of = of + x.length + (as_var[i].end - as_var[i].start) - 1;
    }
    s = s + str + '",' + val.join() + ')}';
    return s;
}
function getVar(str) {
    let literal = getLiteral(str);
    let tag_open = [];
    let idx = 0;
    let idx_cl = 0;
    let tag_close = [];
    let find = 0;
    find = 0;
    //find <%=
    while (find >= 0) {
        find = str.indexOf("<%=", find);
        if (find >= 0) {
            let inside_pos = -1;
            for (let i = 0; i < literal.length; i++) {
                if (find >= literal[i].value_start && find <= literal[i].end) {
                    inside_pos = i;
                    break;
                }
                else {
                    continue;
                }
            }
            tag_open[idx] = { pos: find, pos_literal: inside_pos };
            console.log("open tag: " + tag_open[idx].pos);
            idx = idx + 1;
            find = find + 1;
        }
    }
    find = 0;
    // idx = 0;
    while (find >= 0) {
        find = str.indexOf("%>", find);
        if (find >= 0) {
            let inside_pos = -1;
            for (let i = 0; i < literal.length; i++) {
                if (find >= literal[i].value_start && find <= literal[i].end) {
                    inside_pos = i;
                    break;
                }
                else {
                    continue;
                }
            }
            tag_close[idx_cl] = { pos: find + 1, pos_literal: inside_pos };
            console.log("close tag: " + tag_close[idx_cl].pos);
            idx_cl = idx_cl + 1;
            find = find + 1;
        }
    }
    if (tag_close.length > tag_open.length) {
        console.error("ejs file error: unexpected Close Tag");
    }
    if (tag_close.length < tag_open.length) {
        console.error("ejs file error: expected Close Tag");
    }
    let content = [];
    // let idL = 0;
    // let last = tag_open[inAtrr].pos_literal;
    for (let i = 0; i < tag_open.length; i++) {
        console.log("get from " + tag_open[i].pos + " to " + tag_close[i].pos);
        // substring doesn't include end, so add 1
        let ctn = str.substring(tag_open[i].pos, tag_close[i].pos + 1);
        let v = varGen(ctn, tag_open[i].pos, tag_close[i].pos);
        // if (tag_open[i].pos_literal == -1) {
        v.attr_pos = tag_open[i].pos_literal;
        content[i] = v;
    }
    return [content, literal];
}
function varGen(str, start, end) {
    // console.log("Var: " + str);
    let stx = str.replace(/\s/g, "");
    // let stx = str;
    let tag = [];
    let idx = 0;
    let find = 0;
    //find ///
    while (find >= 0) {
        find = stx.indexOf("///", find);
        if (find >= 0) {
            if (idx % 2 == 0)
                tag[idx] = find + 3;
            else
                tag[idx] = find;
            idx = idx + 1;
            find = find + 1;
        }
    }
    if (tag.length % 2 != 0) {
        console.error("ejs file error: Tag not match");
    }
    let ty = "AttrValue";
    let ed = stx.length - 2;
    if (tag.length >= 2) {
        ty = stx.substring(tag[0], tag[1]);
        ed = tag[0] - 3;
    }
    let v = snackCase(stx.substring(3, ed));
    return { name: v, type: ty, start: start, end: end, attr_pos: -1, is_loaded: false };
}
function snackCase(str) {
    let s = str;
    for (let i = 0; i < str.length; i++) {
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            let up = s.charAt(i);
            s = s.replace(up, "_" + up.toLowerCase());
        }
    }
    return s;
}
function getLiteral(str) {
    let tag_pos = [];
    let idx = 0;
    let find = 0;
    let stx = [];
    //find "
    while (find >= 0) {
        find = str.indexOf('"', find);
        if (find >= 0) {
            tag_pos[idx] = find;
            idx = idx + 1;
            find = find + 1;
        }
    }
    if (tag_pos.length <= 0) {
        console.log("No literal found");
    }
    if (tag_pos.length % 2 == 1) {
        console.error("Error expected \"");
    }
    // find white space pos
    let post_s = [];
    find = 0;
    idx = 0;
    while (find >= 0) {
        find = str.indexOf(' ', find);
        if (find >= 0) {
            post_s[idx] = find;
            idx = idx + 1;
            find = find + 1;
        }
    }
    for (let i = 0; i < tag_pos.length; i = i + 2) {
        let litr = str.substring(tag_pos[i] + 1, tag_pos[i + 1]);
        // console.log("lioteral: " + litr + tag_pos[i], tag_pos[i + 1]);
        let attrname = "";
        let start = 0;
        let value_start = tag_pos[i] + 1;
        for (const j of post_s) {
            if (j + 1 > tag_pos[i]) {
                break;
            }
            if (str.substring(j + 1, tag_pos[i]).indexOf(' ') >= 0) {
                continue;
            }
            attrname = str.substring(j + 1, tag_pos[i] - 1);
            start = j;
        }
        // console.log("attr: " + i + attrname);
        stx[i / 2] = { name: attrname, value: litr, start, end: tag_pos[i + 1], value_start };
    }
    // console.log(tag_pos);
    // console.log("literal: " + stx);
    return stx;
}
function replaceRange(str, val, start, end) {
    let ctn = str.substring(0, start) + val + str.substring(end + 1);
    // console.log("change form: " + start + " to " + end + " with " + val);
    // console.log("result " + ctn);
    return ctn;
}
