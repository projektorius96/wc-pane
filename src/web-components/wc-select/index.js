import { buildFromLoopData } from '../../loopData.js';
import { getTagNameFromModuleURL } from '../../utils/customElementTagName.js';

export const wc_select = getTagNameFromModuleURL(import.meta.url);
customElements.define(wc_select, class extends HTMLSelectElement {

    constructor({name, attrs}) {

        super();

        this.style.width = "100%";
        this.name = name;

        if (attrs?.loopData) {
            buildFromLoopData(this, attrs.loopData);
        }

    }

}
, 
{
    extends: 'select'
})
