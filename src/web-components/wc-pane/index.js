import setStyling from './index.css.js';

/**
 * > **NOTE** : \<wc-pane\> is top-level (entry) web-component element
 */

/* DEV_NOTE (!) # DOES NOT WORK for `vite build`, so MUST to hard-code the value in matching its directory endpoint, as follows (see:1^): */
export const wc_pane = 'wc-pane'/*  1^[...import.meta.url.split('/').reverse()][1] */;
customElements.define(wc_pane, class extends HTMLElement {

    constructor({container, position, minWidth, draggable = false, opacity = 0.75, hidden = false}){

        /**
         * > Herein keyword `this` refers to the instance of top-level `wc_pane` element during `new HUD` initalization; 
        */

        super();
        
        setStyling.call(this, {container, position, minWidth, opacity, hidden});

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

    getInput({name, index = 1}){
        
        return document.getElementsByName(name).item(index);
        
    }

    addSection({sectionCount = 1, accessor = "child", flex_direction = "column"}){

        return (
            Array.from({length: sectionCount})
            .map(()=> document.createElement('section') )
            .map((section, nth)=>{

                section.style.cssText = /* style */`
                    display: flex;
                    flex-direction: ${flex_direction};
                    padding: 4px;
                `;

                section.setAttribute('id', `${accessor}${accessor !== "parent" ? nth+1 : ""}`);
                section.setAttribute('name', `${accessor}${accessor !== "parent" ? nth+1 : ""}`);
                
                return section;
    
            })
        )

    }

    addGroup({ name, override_label = "", nodes = [], open = false, label = true, nestedUnder = null}){

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
            if (!label) summary.style.display = 'none';

            // Add event listener for toggle event
            details.addEventListener('toggle', ()=>{
                summary.classList.toggle('open', details.open);
            });


        // DEV_NOTE # hacky way to do Boolean-first cascading as !Boolean(undefined) will return true-ish
        if ( !Boolean( details.append(...nodes) ) ) {

            if (nestedUnder !== null && nestedUnder instanceof HTMLElement){
                details.style.width = String(100+'%')
                !Boolean( nestedUnder.append(
                    details
                ) ) && document.adoptedStyleSheets.push(summary$css);
            } else {
                // DEV_NOTE # hacky way to do Boolean-first cascading as !Boolean(undefined) will return true-ish
                !Boolean( this.append(
                    details
                ) ) && document.adoptedStyleSheets.push(summary$css);
            }

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
        document.rm('mousemove', mousemove);
        guiElement = null;
    }
    function mousedown(e){
        if (guiElement === null) {
            guiElement = e.currentTarget;
        }
        const { altKey } = e;
        if    ( altKey )   {
            e.preventDefault();
            document.on('mousemove', mousemove);
        } 
    }
    thisArg.on('mousedown', mousedown)
    document.on('mouseup', mouseup)
}