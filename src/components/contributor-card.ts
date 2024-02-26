import contributorCard from '../scss/components/contributor_card.scss'

/**
 * Attributes list:
 * - `link` : Url of user profile or github link
 * - `img` : Source image of profile picture
 * - `name` : Name
 * - `desc` : Description
 */
export class ContributorCard extends HTMLElement {
    // uncomment to set attributeChangedCallback of attribute
    // static observedAttributes = ["link", "img", "name", "desc"];

    constructor() {
        super()
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        //get attribute
        let link = this.getAttribute("link");

        let img_src = this.getAttribute("img");
        let name = this.getAttribute("name");
        let desc = this.getAttribute("desc");

        //style
        const style = document.createElement("style");
        style.textContent = contributorCard;

        //layer
        const layer = document.createElement("div");
        // layer.setAttribute("class", "layer");

        //container
        const container = document.createElement("a");

        container.setAttribute("href", link ? link : "");
        // container.setAttribute("class", "container");

        //create photo
        const photo = document.createElement("div");
        // photo.setAttribute("class", "photo");

        const image_container = document.createElement("div");
        // image_container.setAttribute("class", "image-container");

        const background_image = document.createElement("div");
        // background_image.setAttribute("class", "background-image");

        const img = document.createElement("img");
        img.setAttribute("src", img_src ? img_src : "");
        img.setAttribute("alt", name ? name : "");

        image_container.appendChild(background_image);
        image_container.appendChild(img);

        photo.appendChild(image_container);


        // create text
        const text = document.createElement("div");
        // text.setAttribute("class", "text");

        const p_name = document.createElement("p");
        // p_name.setAttribute("class", "name");
        p_name.textContent = name;

        const p_desc = document.createElement("p");
        // p_desc.setAttribute("class", "desc");
        p_desc.textContent = desc;

        text.appendChild(p_name);
        text.appendChild(p_desc);

        // append child to container
        container.appendChild(photo);
        container.appendChild(text);


        //append child to shadow
        const contributor_card = document.createElement("div");
        contributor_card.setAttribute("class", "contributor-card");

        contributor_card.appendChild(layer);
        contributor_card.appendChild(container);
        shadow.appendChild(style);
        shadow.appendChild(contributor_card);

    }

    // disconnectedCallback() {
    // }

    // adoptedCallback() {
    // }

    // attributeChangedCallback(name: any, oldValue: any, newValue: any) {
    // }
}


customElements.define('contributor-card', ContributorCard);