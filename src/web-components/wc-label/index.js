export const wc_label = (new URL(import.meta.url)).pathname.split('/').at(-2);
customElements.define(wc_label, class extends HTMLLabelElement {

    constructor(description = ''){
        
        super();
        
        this.style.cssText = /* style */`
            width: 100%;
            text-align: center;
        `;
        this.textContent = String(description);

        /**
         * @alias
         */
        this.text = this.textContent;

        return this;

    }

}
, 
{
    extends: HTMLElement.extends?.(HTMLLabelElement)
})