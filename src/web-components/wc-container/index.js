import setStyling from './index.css.js';

export const wc_container = [...import.meta.url.split('/').reverse()][1];
customElements.define(wc_container, class extends HTMLElement {
    
    constructor({container, position, minWidth, draggable = false}){

        super();
        
        setStyling.call(this, {container, position, minWidth});

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

    addGroup({name, override_label = '', nodes = [document.createElement('template')], open = /* ! */false}){

        const summary$css = new CSSStyleSheet();
        const summary = document.createElement('summary');
            summary.id = (override_label || name);
            summary.textContent = summary.id;
        
        const details = document.createElement('details');
            details.appendChild(summary);
            details.name = name;
            details.open = open; 
                if ( !Boolean( new Set(details.getAttributeNames()).has('open') ) ){
                    summary.parentElement.firstElementChild.style.padding = "4px";
                    summary$css.insertRule(`summary#${summary.id}::marker { content: \"✅\"; }`, summary$css.cssRules.length);
                }
            details.addEventListener('toggle', (e)=>{
                if ( new Set(e.target.getAttributeNames()).has("open") ){
                    summary$css.insertRule(`summary#${summary.id}::marker { content: \"❎\"; }`, summary$css.cssRules.length);
                }
                else {
                    summary$css.insertRule(`summary#${summary.id}::marker { content: \"✅\"; }`, summary$css.cssRules.length);
                }
            })


        // DEV_NOTE # !Boolean(undefined) === true, as .append() returns true;
        if(!Boolean( details.append(...nodes) )){

            !Boolean( this.append(
                details
            )) && document.adoptedStyleSheets.push(summary$css);

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