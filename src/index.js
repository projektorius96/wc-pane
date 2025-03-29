import './style.css'
import './DOMutils.js';
import { wc_pane } from './web-components/wc-pane/index.js';
import { wc_input } from './web-components/wc-input/index.js';
import { wc_select } from './web-components/wc-select/index.js';
import { wc_label } from './web-components/wc-label/index.js';
import { wc_list } from './web-components/wc-list/index.js';

export {
    Pane,
    Label,
    Input,
}

const Pane = customElements.get(wc_pane);
const Label = customElements.get(wc_label);
const Input = customElements.get(wc_input);
        Input.Select = customElements.get(wc_select);
        Input.List = customElements.get(wc_list);

