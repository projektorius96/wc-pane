import { setStyling } from "./index.css.js";

export const wc_input = [...import.meta.url.split('/').reverse()][1];
customElements.define(wc_input, class extends HTMLInputElement {

    constructor({name, type, attrs}){

        super();

        if( setStyling.call(this, type, attrs) ){

            setAttributes(this, attrs)
            this.name = name || type;
            this.type = type || 'range';

        }

        return this;

    }

}
, 
{
    extends: HTMLElement.extends(HTMLInputElement)
})

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}