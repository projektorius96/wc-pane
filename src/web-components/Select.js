import { setDefaultStyling } from "./global.css.js";
export default class wc_select extends HTMLSelectElement {

    constructor({name, attrs}){
        
        super();
        setDefaultStyling.call(this)

        this.name = name;
        if (attrs?.loopData[1].length > 0){
            [...attrs.loopData[1]].forEach((item, j)=>{
                const argv1 = attrs.loopData[1];
                attrs.loopData[0].call(this, item, j, argv1)
            })
        }
        
    }

}