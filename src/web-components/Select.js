import setDefaultStyling from "./modular_styling.js";
export default class x_select extends HTMLSelectElement {

    constructor({name, attrs}){
        
        super();
        setDefaultStyling.call(this)

        this.name = name || `default-${x_select.name.split(U).at(-1)/* === select */}`;
        if (attrs.data?.length > 0){
            [...attrs.data].forEach((item, j)=>{
                if (j === 0){
                    if (attrs.defaultEntry){
                        this.append(new Option(attrs.defaultEntry.description))
                        this.options[j].disabled = attrs.defaultEntry.isDisabled;
                    }
                    this.append(new Option(item[attrs.dataEntry], item[attrs.dataEntry]))
                }
                else /* as if: (j !== 0 && j > 0) */ {
                    this.append(new Option(item[attrs.dataEntry], item[attrs.dataEntry], false, false))
                }
            })
        }
        else {
            this.appendChild(
                new Option(`WARNING: ${name} is empty ${Array.name}`)
            )
        }
        return this;
    }

    get getRef(){
        return this.name;
    }

}