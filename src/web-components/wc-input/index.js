import setStyling from "./index.css.js";

/* DEV_NOTE (!) # DOES NOT WORK for `vite build`, so MUST to hard-code the value in matching its directory endpoint, as follows (see:1^): */
export const wc_input = 'wc-input'/* 1^[...import.meta.url.split('/').reverse()][1] */;
customElements.define(wc_input, class extends HTMLInputElement {

    constructor({name, type, attrs}){

        super();

        if( setStyling.call(this, type, attrs) ){

            setAttributes(this, attrs);
                this.name = name || type;
                this.type = type || 'range';

        }

        return this;

    }

}
, 
{
    extends: HTMLElement.extends?.(HTMLInputElement)
})

function setAttributes(el, attrs) {
    for (let key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}