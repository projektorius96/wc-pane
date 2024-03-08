import { setDefaultStyling } from "../global.css.js";

export const wc_input = [...import.meta.url.split('/').reverse()][1];
customElements.define(wc_input, class extends HTMLInputElement {

    constructor({name, type, attrs}){

        super();

        setDefaultStyling.call(this, type)
        
        setAttributes(this, attrs)
        this.name = name || type;
        this.type = type || 'range';
        
        switch(type){
            case 'checkbox':
                this.style.transform = `scale(${attrs?.cboxScaling || 1.24})`;
                break;
            default:;
        }

        return this;

    }

},
{
    extends: HTMLElement.extends(HTMLInputElement)
})

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}