import setStyling from './index.css.js';
import { enableDraggingFor } from '../../utils/dragging.js';
import { applyFlexColumnStyles } from '../../styles/shared.js';

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
    attributeChangedCallback(_, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.style.width = `fit-content`;
        }
    }

    /**
     * 
     * @argument{Object} takes single `options` as its input whose properties are as follows:
     * 
     * @param {Object} `options.container` - `container` under which `this` element will be nested | | **default**:`document.body` 
     * @param {String} `options.id` - identifier | **default**:`this.tagName.toLowerCase()` (_GOOD PRACTICE TO USE YOUR OWN_)
     * @param {Boolean} `options.draggable` - iff `options.draggable:true`, see `./README.md` "Features" heading | **default**:`false` 
     * @param {Boolean} `options.hidden` - a flag that controls visibility of `this` element | **default**:`false`, hence "visible"
     * @param {CSSRule} `options.position` CSS-related option | **default**:`right` : (`right|left`), hence oriented towards "right" of viewport
     * @param {CSSRule} `options.opacity`  CSS-related option | **default**:`1` : (`[0..1]`), useful if GUI must not overalap other HTML elements in the background
     * @param {CSSRule} `options.minWidth` CSS-related option | **default**:`20` : (`[0..100]`) - water is wet - it does control minimum width of `this` element
     * 
     * @returns {Object} `{name}` - so it can be used in cascading operations with DOM locators
     */
    constructor({id = '', container = document.body, draggable = false, hidden = false, position = 'left', opacity = 1, minWidth = 20}) {

        const cssWasApplied = setStyling.call( super() , { hidden, position, opacity, minWidth });
            if (cssWasApplied){

                this.id = id || this.tagName.toLowerCase();

                if (container !== document.body) {
                    container.prepend(this);
                } else {
                    document.body.prepend(this);
                }

                if(draggable) {
                    enableDraggingFor.call(this/* , position */);
                }

            }

        return this;

    }

    find({name, index = 0}) {
        
        return document.getElementsByName(name).item(index);
        
    }

    addSection({sectionCount = 1, accessor = "child", flex_direction = "column"}) {

        return (
            Array.from({length: sectionCount})
            .map(()=> document.createElement('section') )
            .map((section, nth)=>{

                applyFlexColumnStyles(section);
                section.style.flexDirection = flex_direction;
                section.style.padding = '8px';

                section.setAttribute('id', `${accessor}${accessor !== "parent" ? nth+1 : ""}`);
                section.setAttribute('name', `${accessor}${accessor !== "parent" ? nth+1 : ""}`);
                
                return section;
    
            })
        )

    }

    addGroup({ name, override_label = "", nodes = [], open = false, label = true, nestedUnder = null }) {
        const summary = document.createElement('summary');
            summary.id = name;
            summary.textContent = (override_label || summary.id);
        
        const details = document.createElement('details');
            details.appendChild(summary);
            details.name = name;
            if (open) details.setAttribute('open', '');
            if (!label) summary.style.display = 'none';

        if ( TRUE( details.append(...nodes) ) ) {

            if ( nestedUnder !== null && nestedUnder instanceof HTMLElement ) {
                details.style.width = CSS.percent(100).toString()
                TRUE( nestedUnder.append(
                    details
                ) );
            } else {
                TRUE( this.append(
                    details
                ) );
            }

            if ( this.children.length > 0 ) {
                this.setAttribute('children-count', this.children.length)
            }

            return ({
                name
            });

        }

    }

})