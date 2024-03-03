/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scss/components/menu-item.scss":
/*!********************************************!*\
  !*** ./src/scss/components/menu-item.scss ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n        const styles = `*{box-sizing:border-box;transition-property:color,background-color,opacity;-webkit-transition-duration:var(--duration-normal);-moz-transition-duration:var(--duration-normal);-ms-transition-duration:var(--duration-normal);-o-transition-duration:var(--duration-normal);transition-duration:var(--duration-normal);-webkit-transition-timing-function:linear;-moz-transition-timing-function:linear;-ms-transition-timing-function:linear;-o-transition-timing-function:linear;transition-timing-function:linear;margin:0}:host,:host([mode=drawer]){display:inline-block;height:56px;width:100%;position:relative}:host>div,:host([mode=drawer])>div{position:absolute;opacity:0;border-radius:var(--corner-full);height:inherit;left:12px;width:336px;top:0;z-index:-1}:host>a,:host([mode=drawer])>a{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;gap:12px;height:inherit;width:100%;padding-left:28px;padding-right:28px;text-decoration:none;color:var(--md-sys-color-on-surface-variant)}:host>a>*,:host([mode=drawer])>a>*{flex-grow:0}:host>a>::slotted(*),:host([mode=drawer])>a>::slotted(*){flex-basis:24px;width:24px;height:24px}:host>a>p:nth-child(2),:host([mode=drawer])>a>p:nth-child(2){flex-grow:2;white-space:nowrap;text-overflow:ellipsis;text-decoration:none;font-weight:var(--font-weight-label-large);font-size:var(--font-size-label-large);letter-spacing:var(--font-tracking-label-large);line-height:var(--line-height-label-large)}:host>a>p:nth-child(3),:host([mode=drawer])>a>p:nth-child(3){white-space:nowrap;text-decoration:none;font-weight:var(--font-weight-label-large);font-size:var(--font-size-label-large);letter-spacing:var(--font-tracking-label-large);line-height:var(--line-height-label-large)}:host([state=active])>div:nth-child(2),:host([mode=drawer][state=active])>div:nth-child(2){opacity:1;background-color:var(--md-sys-color-secondary-container)}:host([state=active])>a,:host([mode=drawer][state=active])>a{color:var(--md-sys-color-on-secondary-container)}:host([state=active])>a>p:nth-child(2),:host([mode=drawer][state=active])>a>p:nth-child(2){text-decoration:none;font-weight:var(--font-weight-prominent-label-large);font-size:var(--font-size-label-large);letter-spacing:var(--font-tracking-label-large);line-height:var(--line-height-label-large)}:host([state=active])>a>p:nth-child(3),:host([mode=drawer][state=active])>a>p:nth-child(3){color:var(--md-sys-color-on-surface-variant)}:host([state=active]:hover)>div:nth-child(3),:host([mode=drawer][state=active]:hover)>div:nth-child(3){background-color:var(--md-sys-color-on-secondary-container);opacity:.08}:host(:hover)>div:nth-child(3),:host([mode=drawer]:hover)>div:nth-child(3){background-color:var(--md-sys-color-on-surface);opacity:.08}:host(:hover)>a,:host([mode=drawer]:hover)>a{color:var(--md-sys-color-on-surface)}:host(:hover)>a>p:nth-child(3),:host([mode=drawer]:hover)>a>p:nth-child(3){color:var(--md-sys-color-on-surface-variant)}:host([mode=rail]){display:inline-block;width:80px;height:auto;position:relative}:host([mode=rail])>div{opacity:0;height:32px;width:56px;left:12px;top:0;position:absolute;z-index:-1}:host([mode=rail])>a{text-decoration:none;color:var(--md-sys-color-on-surface-variant);padding-left:12px;padding-right:12px;display:flex;flex-direction:column;align-items:center;gap:0}:host([mode=rail])>a>::slotted(*){margin-top:4px !important;margin-bottom:4px !important;flex-grow:0;flex-basis:24px;width:24px;height:24px}:host([mode=rail])>a>p:nth-child(2){margin-top:4px;flex-grow:0;white-space:nowrap;text-overflow:ellipsis;text-decoration:none;font-weight:var(--font-weight-label-medium);font-size:var(--font-size-label-medium);letter-spacing:var(--font-tracking-label-medium);line-height:var(--line-height-label-medium)}:host([mode=rail][state=active])>div:nth-child(2){opacity:1;color:var(--md-sys-color-secondary-container)}:host([mode=rail][state=active])>a{color:var(--md-sys-color-on-surface)}:host([mode=rail][state=active])>a>::slotted(*){color:var(--md-sys-color-on-secondary-container)}:host([mode=rail][state=active])>a>p:nth-child(2){text-decoration:none;font-weight:var(--font-weight-prominent-label-medium);font-size:var(--font-size-label-medium);letter-spacing:var(--font-tracking-label-medium);line-height:var(--line-height-label-medium)}:host([mode=rail]:hover)>div:nth-last-child(3),:host([mode=rail][state=active]:hover)>div:nth-last-child(3){color:var(--md-sys-color-on-surface);opacity:.08}:host([mode=rail]:hover)>a,:host([mode=rail][state=active]:hover)>a{color:var(--md-sys-color-on-surface)}:host([mode=rail]:hover)>a>::slotted(*),:host([mode=rail][state=active]:hover)>a>::slotted(*){color:var(--md-sys-color-on-surface)}`;\n        /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (styles);\n    \n\n//# sourceURL=webpack://gihex-comp/./src/scss/components/menu-item.scss?");

/***/ }),

/***/ "./src/components/menu-item.ts":
/*!*************************************!*\
  !*** ./src/components/menu-item.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.MenuItem = void 0;\nconst menu_item_scss_1 = __importDefault(__webpack_require__(/*! ../scss/components/menu-item.scss */ \"./src/scss/components/menu-item.scss\"));\nconst no_l = (e) => {\n    e.preventDefault();\n};\n/**\n * Attributes:\n * - `link`: target url\n * - `label`: Menu label\n * - `badge`-label: Badge label (optional)\n * - `no-link`: do not process to target url\n * - `mode`: `drawer` as default or `rail`\n */\nclass MenuItem extends HTMLElement {\n    constructor() {\n        super();\n    }\n    connectedCallback() {\n        const shadow = this.attachShadow({ mode: \"open\" });\n        //get attribute\n        const link = this.getAttribute(\"link\");\n        const label = this.getAttribute(\"label\");\n        const badge_label = this.getAttribute(\"badge-label\");\n        const no_link = this.getAttribute(\"no-link\");\n        const style = document.createElement(\"style\");\n        style.textContent = menu_item_scss_1.default;\n        const active_indicator = document.createElement(\"div\");\n        const state_layer = document.createElement(\"div\");\n        const container = document.createElement(\"a\");\n        container.href = link ? link : \"/\";\n        if (!no_link) {\n            container.onclick = no_l;\n        }\n        const icon_slot = document.createElement(\"slot\");\n        const menu_label = document.createElement(\"p\");\n        menu_label.textContent = label;\n        const menu_badge_label = document.createElement(\"p\");\n        menu_badge_label.textContent = badge_label;\n        container.appendChild(icon_slot);\n        container.appendChild(menu_label);\n        container.appendChild(menu_badge_label);\n        shadow.appendChild(style);\n        shadow.appendChild(active_indicator);\n        shadow.appendChild(state_layer);\n        shadow.appendChild(container);\n        this.addEventListener(\"click\", this.state_change);\n    }\n    disconnectedCallback() {\n        this.removeEventListener(\"click\", this.state_change);\n    }\n    // adoptedCallback() {\n    // }\n    attributeChangedCallback(name, oldValue, newValue) {\n        console.log(`Attribute ${name} has changed from ${oldValue} to ${newValue}.`);\n        switch (name) {\n            case \"no-link\":\n                const shadow = this.shadowRoot;\n                console.log(\"shadow\", shadow);\n                if (!shadow)\n                    return;\n                const a_link = shadow.querySelector('a');\n                console.log(a_link);\n                if (!a_link)\n                    return;\n                if (newValue == null) {\n                    a_link.onclick = null;\n                }\n                else {\n                    a_link.onclick = no_l;\n                }\n                break;\n            default:\n                break;\n        }\n    }\n    state_change() {\n        const scope = this.getAttribute(\"scope\");\n        if (scope) {\n            const menu_in_scope = document.querySelectorAll(`[scope=\"${scope}\"]`);\n            for (const m of menu_in_scope) {\n                m.removeAttribute(\"state\");\n            }\n        }\n        this.setAttribute(\"state\", \"active\");\n    }\n}\nexports.MenuItem = MenuItem;\nMenuItem.observedAttributes = [\"no-link\"];\ncustomElements.define('menu-item', MenuItem);\n\n\n//# sourceURL=webpack://gihex-comp/./src/components/menu-item.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/components/menu-item.ts");
/******/ 	
/******/ })()
;