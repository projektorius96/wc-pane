import { setDefaultStyling } from "./global.css.js";

function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

export default class wc_input extends HTMLInputElement {

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

}