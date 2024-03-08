export default class wc_select extends HTMLSelectElement {

    constructor({name, attrs}){
        
        super();

        this.name = name;
        if (attrs?.loopData[1].length > 0){
            [...attrs.loopData[1]].forEach((item, j)=>{
                const argv1 = attrs.loopData[1];
                attrs.loopData[0].call(this, item, j, argv1)
            })
        }
        
    }

}