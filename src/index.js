import './DOMutils.js'; // DEV_NOTE (!) # MUST BE very first import statement, especially because of {HTMLElement.extends} that every other "wc_*" component imported below depends on ;
import { wc_container } from './web-components/wc-container/index.js';
import { wc_input } from './web-components/wc-input/index.js';
import { wc_select } from './web-components/wc-select/index.js';
import { wc_label } from './web-components/wc-label/index.js';
import { wc_list } from './web-components/wc-list/index.js';

const 
    HUD = customElements.get(wc_container),
    Input = customElements.get(wc_input),
    Select = customElements.get(wc_select),
    Label = customElements.get(wc_label),
    List = customElements.get(wc_list);

// DEV_NOTE # Namespacing before final named export
Input.Select = Select; /* as of now accessible via Input.Select */
Input.List = List; /* as of now accessible via Input.List */

export {
    HUD,
    Input,
    Label,
}