import menuItem from '../scss/components/menu-item.scss'

const no_l = (e: MouseEvent) => {
    e.preventDefault()
};

/**
 * Attributes:
 * - `link`: target url
 * - `label`: Menu label
 * - `badge`-label: Badge label (optional)
 * - `no-link`: do not process to target url
 * - `mode`: `drawer` as default or `rail`
 */

export class MenuItem extends HTMLElement {
    static observedAttributes = ["no-link"];


    constructor() {
        super();
    }

    connectedCallback() {
        const shadow = this.attachShadow({ mode: "open" });

        //get attribute
        const link = this.getAttribute("link");
        const label = this.getAttribute("label");
        const badge_label = this.getAttribute("badge-label");
        const no_link = this.getAttribute("no-link");


        const style = document.createElement("style");
        style.textContent = menuItem;

        const active_indicator = document.createElement("div");
        const state_layer = document.createElement("div");

        const container = document.createElement("a") as HTMLAnchorElement;
        container.href = link ? link : "/";
        if (!no_link) {
            container.onclick = no_l;
        }

        const icon_slot = document.createElement("slot");
        const menu_label = document.createElement("p");
        menu_label.textContent = label;
        const menu_badge_label = document.createElement("p");
        menu_badge_label.textContent = badge_label;

        container.appendChild(icon_slot);
        container.appendChild(menu_label);
        container.appendChild(menu_badge_label);

        shadow.appendChild(style);
        shadow.appendChild(active_indicator);
        shadow.appendChild(state_layer);
        shadow.appendChild(container);

        this.addEventListener("click", this.state_change);
    }

    disconnectedCallback() {
        this.removeEventListener("click", this.state_change);
    }

    // adoptedCallback() {
    // }

    attributeChangedCallback(name: any, oldValue: any, newValue: any) {
        console.log(
            `Attribute ${name} has changed from ${oldValue} to ${newValue}.`,
        );
        switch (name) {
            case "no-link":
                const shadow = this.shadowRoot;
                console.log("shadow", shadow);

                if (!shadow) return;
                const a_link = shadow.querySelector('a');
                console.log(a_link);
                if (!a_link) return;

                if (newValue == null) {
                    a_link.onclick = null;

                } else {
                    a_link.onclick = no_l;
                }

                break;

            default:
                break;
        }
    }

    state_change() {
        const scope = this.getAttribute("scope");

        if (scope) {
            const menu_in_scope = document.querySelectorAll(`[scope="${scope}"]`);
            for (const m of menu_in_scope) {
                m.removeAttribute("state")
            }
        }

        this.setAttribute("state", "active");
    }
}

customElements.define('menu-item', MenuItem);