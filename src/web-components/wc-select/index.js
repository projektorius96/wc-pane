/* DEV_NOTE (!) # DOES NOT WORK for `vite build`, so MUST to hard-code the value in matching its directory endpoint, as follows (see:1^): */
export const wc_select = 'wc-select'/*  1^[...import.meta.url.split('/').reverse()][1] */;
customElements.define(wc_select, class extends HTMLSelectElement {

    constructor({name, attrs}){
        
        super();

        this.style.width = "100%";
        this.name = name;
        
        if (attrs?.loopData[1].length > 0){
            [...attrs.loopData[1]].forEach((item, j)=>{
                const argv1 = attrs.loopData[1];
                attrs.loopData[0].call(this, item, j, argv1);
            });
        }
        
    }

}
, 
{
    extends: HTMLElement.extends?.(HTMLSelectElement)
})
