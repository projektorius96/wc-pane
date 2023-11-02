export default class wc_gui extends HTMLElement {

    constructor({container, position = 'start', minWidth = 20}){
        super();
        this.style.cssText = `
            justify-self: ${(document.body.style.display = 'grid') && position};
            min-width: ${minWidth}%;
            border: 2px solid black;
            border-radius: 8px;
            padding: 8px;
        `;
        if (container !== document.body){
            container.appendChild(this)
        }
        else {
            document.body.appendChild(this)
        }

        return this;

    }

    find({name, index = 0}){

        const _section = document.getElementsByName(name).item(index);
        
        return(
            _section
        )

    }

    addSection({accessor, column = 1}){

        return (
            [...new Array(column).fill(HTMLTemplateElement)].map((_HTMLSectionElement)=>{

                return (
                    _HTMLSectionElement = document.createElement('section')
                )
    
            }).map((__HTMLSectionElement, N)=>{

                __HTMLSectionElement.style.cssText = `
                    display: flex;
                    flex-direction: row;
                `;

                __HTMLSectionElement.setAttribute('id', `${accessor}${1+N}`);
                __HTMLSectionElement.setAttribute('name', `${accessor}${1+N}`);
                
                return (
                    __HTMLSectionElement
                );
    
            })
        )

    }

    addGroup({name, nodes = [document.createElement('template')]}){

        const legend = document.createElement('legend');
            legend.style.cssText = `
                position: relative;
                top: 2px;
                background-color: black;
                color: white;
                border-radius: 1em;
            `;
            legend.textContent = name;
        const fieldset = document.createElement('fieldset');
            /* fieldset.style.cssText = ``; */
            fieldset.name = name;
            fieldset.appendChild(legend)
            fieldset.append(
                ...nodes
            )

            this.append(
                fieldset
            )

    }

}