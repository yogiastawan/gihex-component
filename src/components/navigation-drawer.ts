import sideNavigation from '../scss/components/navigation_drawer.scss'

const template = document.createElement('template');
template.innerHTML = `
<div></div>
<div></div>
`;

export class SideNavigation extends HTMLElement {

    static observedAttributes = ["show"];

    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = sideNavigation;

        shadow.appendChild(style);
        shadow.appendChild(template.content.cloneNode(true));
    }

    // attributeChangedCallback(name: any, oldValue: any, newValue: any) {

    // }


}

customElements.define("navigation-drawer", SideNavigation);