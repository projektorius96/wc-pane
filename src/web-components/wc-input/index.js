import setStyling from "./index.css.js";
import { getTagNameFromModuleURL } from '../../utils/customElementTagName.js';

export const wc_input = getTagNameFromModuleURL(import.meta.url);
customElements.define(wc_input, class extends HTMLInputElement {

    #setAttributes(el, attrs) {
        for (let key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    constructor({name, type, attrs}) {

        super();
        setStyling.call(this);

        this.#setAttributes(this, attrs);
        this.name = name || type;
        this.type = type || 'range';

    }

}
, 
{
    extends: 'input'
})