/* DEV_NOTE (!) # DOES NOT WORK for `vite build`, so MUST to hard-code the value in matching its directory endpoint, as follows (see:1^): */

export const wc_label = 'wc-label'/* 1^[...import.meta.url.split('/').reverse()][1] */;
customElements.define(wc_label, class extends HTMLLabelElement {

    constructor(description = ''){
        
        super();
        
        this.style.cssText = /* style */`
            width: 100%;
            text-align: center;
        `;
        this.textContent = String(description);

        return this;

    }

}
, 
{
    extends: HTMLElement.extends?.(HTMLLabelElement)
})