import { getTagNameFromModuleURL } from '../../utils/customElementTagName.js';

export const wc_label = getTagNameFromModuleURL(import.meta.url);
customElements.define(wc_label, class extends HTMLLabelElement {

    constructor({description = '', textAlign = 'left'}) {

        super();

        this.style.cssText = /* css */`
            width: 100%;
            text-align: ${textAlign};
        `;
        this.textContent = description;

    }

}
, 
{
    extends: 'label'
})