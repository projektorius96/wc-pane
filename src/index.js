import './DOMconfigs.js';
import { U, H } from './constants.js';
import wc_container from './web-components/Container';
import wc_input from './web-components/Input';
import wc_label from './web-components/Label.js';
import wc_list from './web-components/List';
import wc_select from './web-components/Select';


// DEV_NOTE # the prefix "wc_" stands for "webcomponent_"
customElements.define(wc_input.name.replace(U, H), wc_input, {extends: 'input'})
customElements.define(wc_label.name.replace(U, H), wc_label, {extends: 'label'})
customElements.define(wc_select.name.replace(U, H), wc_select, {extends: 'select'})
customElements.define(wc_list.name.replace(U, H), wc_list, {extends: 'li'})
customElements.define(wc_container.name.replace(U, H), wc_container)

// DEV_NOTE # Namespacing before final export
wc_input.Select = wc_select; /* to access via Input.Select */
wc_input.List = wc_list; /* to access via Input.List respectively */

export {
    wc_input as Input,
    wc_label as Label,
    wc_container as HUD
}