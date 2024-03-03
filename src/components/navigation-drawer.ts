import sideNavigation from '../scss/components/navigation_drawer.scss'

/**
 * Attributes:
 * - `show` :`standard` as deafult, `modal`, or `no` to hide
 */

export class SideNavigation extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = sideNavigation;

        const menu_container = document.createElement("div");
        const menu_slot = document.createElement("slot");
        menu_container.appendChild(menu_slot);
        const scrim = document.createElement("div");

        shadow.appendChild(style);
        shadow.appendChild(menu_container);
        shadow.appendChild(scrim);
        // shadow.appendChild(template.content.cloneNode(true));
    }

    // attributeChangedCallback(name: any, oldValue: any, newValue: any) {

    // }


}

customElements.define("navigation-drawer", SideNavigation);