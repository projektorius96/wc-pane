export const wc_label = (new URL(import.meta.url)).pathname.split('/').at(-2);
customElements.define(wc_label, class extends HTMLLabelElement {

    constructor({description = '', textAlign = 'left'}) {
        
        if ( super() ) {

            this.style.cssText = /* css */`
                width: 100%;
                text-align: ${textAlign};
            `;
            this.textContent = description;

        }

        return this;

    }

}
, 
{
    extends: 'label'
})