import { UNDERSCORE as U, HYPHEN as H } from './DOMutils.js';
import { wc_container } from './web-components/wc-container/index.js';
import { wc_input } from './web-components/wc-input/index.js';
import { wc_select } from './web-components/wc-select/index.js';
import { wc_label } from './web-components/wc-label/index.js';
import wc_list from './web-components/List';

const 
    HUD = customElements.get(wc_container),
    Input = customElements.get(wc_input),
    Select = customElements.get(wc_select),
    Label = customElements.get(wc_label)
;

customElements.define(wc_list.name.replace(U, H), wc_list, {extends: 'li'})

// DEV_NOTE # Namespacing before final named export
Input.Select = Select; /* as of now accessible via Input.Select */
Input.List = wc_list; /* as of now accessible via Input.List */

export {
    HUD,
    Input,
    Label,
}