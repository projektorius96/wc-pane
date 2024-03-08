import './DOMutils.js'; // DEV_NOTE (!) # MUST BE very first import statement, especially because of {HTMLElement.extends} that every other "wc_*" component imported below depends on ;
import { wc_container } from './web-components/wc-container/index.js';
import { wc_input } from './web-components/wc-input/index.js';
import { wc_select } from './web-components/wc-select/index.js';
import { wc_label } from './web-components/wc-label/index.js';
import { wc_list } from './web-components/wc-list/index.js';

export {
    HUD,
    Label,
    Input,
}

const HUD = customElements.get(wc_container);
const Label = customElements.get(wc_label);
const Input = customElements.get(wc_input);
        Input.Select = customElements.get(wc_select);
        Input.List = customElements.get(wc_list);

