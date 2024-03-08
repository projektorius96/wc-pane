import { UNDERSCORE as U, HYPHEN as H } from './DOMutils.js';
import { wc_container } from './web-components/wc-container/index';
import wc_input from './web-components/Input';
import wc_label from './web-components/Label';
import wc_list from './web-components/List';
import wc_select from './web-components/Select.js';

const HUD = customElements.get(wc_container);

customElements.define(wc_input.name.replace(U, H), wc_input, {extends: 'input'})
customElements.define(wc_label.name.replace(U, H), wc_label, {extends: 'label'})
customElements.define(wc_select.name.replace(U, H), wc_select, {extends: 'select'})
customElements.define(wc_list.name.replace(U, H), wc_list, {extends: 'li'})

// DEV_NOTE # Namespacing before final export
wc_input.Select = wc_select; /* to access via Input.Select */
wc_input.List = wc_list; /* to access via Input.List respectively */

export {
    wc_input as Input,
    wc_label as Label,
    HUD
}