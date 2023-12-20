export default class x_list extends HTMLLIElement {
    
    constructor({name, attrs = {}}){

        super();

        this.style.cssText = /* style */`
            width: 100%;
            display: flex;
            flex-direction: column;
            list-style-type: none;
        `;
        
        this.name = name;
        if (attrs.data?.length > 0){
            [...attrs.data].forEach((item, j)=>{
                const ol = document.createElement('ol');
                    ol.style.wordBreak = "break-word";
                    ol.style.textAlign = "center";
                    ol.style.padding = "4px";
                    ol.style.margin = "0px";
                    ol.style.border = "1px solid black";
                ol.id = j;
                // // DEV_NOTE # Konva.js-specific configuration adoption
                // /* if (false);
                // else if(typeof attrs.dataEntry === 'string'){
                //     ol.style.backgroundColor = `${item[attrs.dataEntry]}`
                //     ol.textContent = item[attrs.dataEntry];
                // }
                // else if(Array.isArray(attrs.data)){
                //     ol.style.backgroundColor = `${item[attrs.dataEntry]()}`
                //     ol.textContent = item[attrs.dataEntry]();
                // } */
                ol.textContent = item[attrs.dataEntry]
                this.appendChild(ol)
            })
        }

        if (attrs.sortable){
            import('sortablejs').then(({Sortable})=>{
                const { el } = Sortable.create(this, {
                    ...attrs.sortable
                })
                return (
                    el
                )
            })
        }
        
    }

}