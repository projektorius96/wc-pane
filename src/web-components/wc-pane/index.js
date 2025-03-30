import setStyling, { enableDraggingFor } from './index.css.js';

/**
 * @typedef {Function} Subroutine
 * 
 * @param {Subroutine} subroutine
 * @returns converts subroutine's returned `undefined` to `true`_ish_ value.
 */
const TRUE = (subroutine) => !Boolean(subroutine);

/**
 * @type
 * The `customElements.get(wc_pane)` is top-level parent (a.k.a. "entry") element
 */
export const wc_pane = (new URL(import.meta.url)).pathname.split('/').at(-2);
customElements.define(wc_pane, class extends HTMLElement {

    static observedAttributes = ['children-count']
    attributeChangedCallback(_, oldValue, newValue){
        if (oldValue !== newValue){
            /* this.style.minWidth = `${100}%` */// # optionally if you need `width`, no less than...
            this.style.width = `fit-content`;
        }
    }

    connectedCallback(){

        if( this.children.length === 0 ) this.style.width = `${30}%` ;

        window.addEventListener('resize', ()=>{
            if ( window.screen.orientation.type.includes('portrait') ){                
                this.style.width = `${100}%`;
                this.style.position = 'absolute'
                    this.style.bottom = `${0}px`;
            } else {
                this.style.display = 'flex';
                this.style.justifySelf = `${ this.options.position }`;
                this.style.width = 'fit-content';
                this.style.position = 'static'
                this.style.bottom = 'auto';
            }
        })

    }

    constructor({container, draggable = false, hidden = false, position = 'right', opacity = 0.75}){
        
        setStyling.call( super() , {container, position, opacity, hidden});

        Object.assign(this, { options: {
            position
        } })

        if(draggable){
            enableDraggingFor(this);
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
                    padding: 8px;
                `;

                section.setAttribute('id', `${accessor}${accessor !== "parent" ? nth+1 : ""}`);
                section.setAttribute('name', `${accessor}${accessor !== "parent" ? nth+1 : ""}`);
                
                return section;
    
            })
        )

    }

    addGroup({ name, override_label = "", nodes = [], open = false, label = true, nestedUnder = null }){

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
            summary.id = name;
            summary.textContent = (override_label || summary.id);
        
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

        if ( TRUE( details.append(...nodes) ) ) {

            if ( nestedUnder !== null && nestedUnder instanceof HTMLElement ){
                details.style.width = CSS.percent(100).toString()
                TRUE( nestedUnder.append(
                    details
                ) ) && document.adoptedStyleSheets.push(summary$css);
            } else {
                TRUE( this.append(
                    details
                ) ) && document.adoptedStyleSheets.push(summary$css);
            }

            if ( this.children.length > 0 ){
                this.setAttribute('children-count', this.children.length)
            }

            return ({
                name
            });

        }

    }

})