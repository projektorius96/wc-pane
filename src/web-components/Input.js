import { setDefaultStyling, setAttributes } from "./wc-utils.js";
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