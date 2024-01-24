export default class wc_gui extends HTMLElement {

    constructor({container, position = 'start', minWidth = 20, draggable = false}){
        
        super();
        
        this.style.cssText = /* style */`
            position: absolute;
                z-index:999;
            justify-self: ${(container.style.display = 'grid') && position};
            min-width: ${minWidth}%;
            border: 2px solid black;
            border-radius: 8px;
            padding: 8px;
            background-color: #d8d8d8;
        `;

        if(draggable){
            let guiElement = null;
            function mousemove(e){
                    guiElement.style.left = `${e.pageX}px`;
                    guiElement.style.top = `${e.pageY}px`;
            }
            function mouseup(){
                document.removeEventListener(mousemove.name, mousemove)
                guiElement = null;
            }
            function mousedown(e){
                if (guiElement === null) {
                    guiElement = e.currentTarget;
                }
                const { altKey } = e;
                if    ( altKey )   {
                    e.preventDefault()
                    document.addEventListener(mousemove.name, mousemove)
                } 
            }
            this.on(mousedown.name, mousedown)
            document.on(mouseup.name, mouseup)
        }

        if (container !== document.body){
            container.prepend(this)
        }
        else {
            document.body.prepend(this)
        }
        
        return this;

    }

    find({name, index = 0}){

        const _section = document.getElementsByName(name).item(index);
        
        return(
            _section
        )

    }

    addSection({accessor, flex_direction = "column", column = 1}){

        return (
            [...new Array(column).fill(HTMLTemplateElement)].map((_HTMLSectionElement)=>{

                return (
                    _HTMLSectionElement = document.createElement('section')
                )
    
            }).map((__HTMLSectionElement, N)=>{

                __HTMLSectionElement.style.cssText = /* style */`
                    display: flex;
                    flex-direction: ${flex_direction};
                `;

                __HTMLSectionElement.setAttribute('id', `${accessor}${1+N}`);
                __HTMLSectionElement.setAttribute('name', `${accessor}${1+N}`);
                
                return (
                    __HTMLSectionElement
                );
    
            })
        )

    }

    addGroup({name, override_label = '', nodes = [document.createElement('template')]}){

        const legend = document.createElement('legend');
            legend.style.cssText = /* style */`
                position: relative;
                top: 2px;
                background-color: black;
                color: white;
                border-radius: 1em;
            `;
            legend.textContent = override_label || name;
        const fieldset = document.createElement('fieldset');
            fieldset.style.cssText = /* style */`
                margin: 0px;
            `;
            fieldset.name = name;
            fieldset.appendChild(legend)
            fieldset.append(
                ...nodes
            )

            this.append(
                fieldset
            )

            return {
                name
            }

    }

}