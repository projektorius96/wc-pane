export default class wc_gui extends HTMLElement {

    constructor({container, position = 'start', minWidth = 20}){
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
        if (container !== document.body){
            container.prepend(this)
        }
        else {
            document.body.prepend(this)
        }

        let elementReleased = true; /* as though just exit mouseup */
        function mousemove({mousedown}, e){
            this.style.left = `${e.pageX}px`;
            this.style.top = `${e.pageY}px`;
            document.body.addEventListener(mouseup.name, mouseup.bind(this, {[mousemove.name] : {
                target: mousedown.target
            }}))
        }
        function mouseup({mousemove}, e){
            if (mousemove.target !== this){
                this.removeEventListener(mousemove.name, mousemove)
            }
            /* console.log(elementReleased === false); */
            /* elementReleased = !elementReleased */
        }
        function mousedown(e){
            e.preventDefault()
            if (elementReleased) {
                elementReleased = !elementReleased
                this.addEventListener(mousemove.name, mousemove.bind(this, {[mousedown.name] : {
                    target: e.target
                }}))
            }
        }

        this.on(mousedown.name, mousedown)
        /* this.on(mouseup.name, mouseup) */
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