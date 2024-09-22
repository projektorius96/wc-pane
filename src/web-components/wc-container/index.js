import setStyling from './index.css.js';

export const wc_container = [...import.meta.url.split('/').reverse()][1];
customElements.define(wc_container, class extends HTMLElement {
    
    constructor({container, position, minWidth, draggable = false, opacity = 0.75}){

        super();
        
        setStyling.call(this, {container, position, minWidth, opacity});

        if(draggable){
            enableDraggingTo(this);
        }

        if (container !== document.body){
            container.prepend(this);
        }
        else {
            document.body.prepend(this);
        }

        return this;

    }

    find({name, index = 0}){
        
        return document.getElementsByName(name).item(index);
        
    }

    addSection({sectionCount = 1, accessor = "child", flex_direction = "column"}){

        return (
            [...new Array(sectionCount).fill(HTMLTemplateElement)].map((_HTMLSectionElement)=>{

                return (
                    _HTMLSectionElement = document.createElement('section')
                );
    
            }).map((__HTMLSectionElement, n)=>{

                __HTMLSectionElement.style.cssText = /* style */`
                    display: flex;
                    flex-direction: ${flex_direction};
                    padding: 4px;
                `;

                __HTMLSectionElement.setAttribute('id', `${accessor}${accessor !== "parent" ? n+1 : ""}`);
                __HTMLSectionElement.setAttribute('name', `${accessor}${accessor !== "parent" ? n+1 : ""}`);
                
                return (
                    __HTMLSectionElement
                );
    
            })
        )

    }

    addGroup({ name, override_label = "", nodes = [document.createElement('template')], open = false }){

        const summary$css = new CSSStyleSheet();
                summary$css.replaceSync(/* style */`
                    summary::marker {
                        content: "✅";
                    }

                    summary.open::marker {
                        content: "❎";
                    }
                `);
        const summary = document.createElement('summary');
            summary.id = (override_label || name);
            summary.textContent = summary.id;
        
        const details = document.createElement('details');
            details.appendChild(summary);
            details.name = name;
            details.open = open;
            
            // Set initial marker based on the open state
            summary.classList.toggle('open', details.open);

            // Add event listener for toggle event
            details.addEventListener('toggle', (e) => {
                summary.classList.toggle('open', details.open);
            });


        // DEV_NOTE # hacky way to do Boolean-first cascading as !Boolean(undefined) will return true-ish
        if ( !Boolean( details.append(...nodes) ) ) {

            // DEV_NOTE # hacky way to do Boolean-first cascading as !Boolean(undefined) will return true-ish
            !Boolean( this.append(
                details
            ) ) && document.adoptedStyleSheets.push(summary$css);

            return ({
                name
            });

        }

    }

})

function enableDraggingTo(thisArg){
    let guiElement = null;
    function mousemove(e){
            guiElement.style.left = `${e.pageX}px`;
            guiElement.style.top = `${e.pageY}px`;
    }
    function mouseup(){
        document.rm(mousemove.name, mousemove);
        guiElement = null;
    }
    function mousedown(e){
        if (guiElement === null) {
            guiElement = e.currentTarget;
        }
        const { altKey } = e;
        if    ( altKey )   {
            e.preventDefault();
            document.addEventListener(mousemove.name, mousemove);
        } 
    }
    thisArg.on(mousedown.name, mousedown)
    document.on(mouseup.name, mouseup)
}