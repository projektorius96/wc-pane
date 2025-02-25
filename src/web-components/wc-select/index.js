export const wc_select = (new URL(import.meta.url)).pathname.split('/').at(-2);
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
