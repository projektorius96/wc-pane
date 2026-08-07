import setStyling from './index.css.js';
import { buildFromLoopData } from '../../loopData.js';
import Sortable from 'sortablejs';
import { getTagNameFromModuleURL } from '../../utils/customElementTagName.js';

export const wc_list = getTagNameFromModuleURL(import.meta.url);
customElements.define(wc_list, class extends HTMLLIElement {

    constructor({ name, attrs = {} }) {

        super();

        if (document){
            document.adoptedStyleSheets.push(
                setStyling.call(this, attrs)
            )
        }

        this.name = name;

        // DEV_NOTE # if block accommodated particularly towards project:konva-layers
        if (attrs.loopData) {
            buildFromLoopData(this, attrs.loopData);
        }

        /**
         * {@link https://github.com/SortableJS/Sortable?tab=readme-ov-file#options}
         * */ 
        if (attrs.sortableConfig) {
            /* import('sortablejs').then(({ Sortable }) => { */
                Sortable.create(this, {
                    ...attrs.sortableConfig
                });
            /* }) */
        }

    }

}
,
{
    extends: 'li'
})