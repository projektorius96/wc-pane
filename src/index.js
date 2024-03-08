import { UNDERSCORE as U, HYPHEN as H } from './DOMutils.js';
import { wc_container } from './web-components/wc-container/index.js';
import { wc_input } from './web-components/wc-input/index.js';
import wc_label from './web-components/Label';
import wc_list from './web-components/List';
import wc_select from './web-components/Select.js';

const HUD = customElements.get(wc_container);
const Input = customElements.get(wc_input);

customElements.define(wc_label.name.replace(U, H), wc_label, {extends: 'label'})
customElements.define(wc_select.name.replace(U, H), wc_select, {extends: 'select'})
customElements.define(wc_list.name.replace(U, H), wc_list, {extends: 'li'})

// DEV_NOTE # Namespacing before final named export
Input.Select = wc_select; /* as of now accessible via Input.Select */
Input.List = wc_list; /* as of now accessible via Input.List */

export {
    HUD,
    Input,
    wc_label as Label,
}