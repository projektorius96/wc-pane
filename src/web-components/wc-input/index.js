import setStyling from "./index.css.js";

export const wc_input = (new URL(import.meta.url)).pathname.split('/').at(-2);
customElements.define(wc_input, class extends HTMLInputElement {

    #setAttributes(el, attrs) {
        for (let key in attrs) {
            el.setAttribute(key, attrs[key]);
        }
    }

    constructor({name, type, attrs}){

        if( setStyling.call( super() , type, attrs) ){

            this.#setAttributes(this, attrs);
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