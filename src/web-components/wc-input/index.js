import setStyling from "./index.css.js";

export const wc_input = (new URL(import.meta.url)).pathname.split('/').at(-2);
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