import { buildFromLoopData } from '../../loopData.js';

export const wc_select = (new URL(import.meta.url)).pathname.split('/').at(-2);
customElements.define(wc_select, class extends HTMLSelectElement {

    constructor({name, attrs}) {
        
        if ( super() ) {

            this.style.width = "100%";
            this.name = name;
            
            if (attrs?.loopData) {
                buildFromLoopData(this, attrs.loopData);
            }

        }

        return this;
        
    }

}
, 
{
    extends: 'select'
})
