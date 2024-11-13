import setStyling from './index.css.js';

/* DEV_NOTE (!) # DOES NOT WORK for `vite build`, so MUST to hard-code the value in matching its directory endpoint, as follows (see:1^): */
export const wc_list = 'wc-list'/* 1^[...import.meta.url.split('/').reverse()][1] */;
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
        if (attrs.loopData[1]?.length > 0) {
            [...attrs.loopData[1]].forEach((item, j) => {
                attrs.loopData[0].call(this, item, j);
            });
        }

        /**
         * {@link https://github.com/SortableJS/Sortable?tab=readme-ov-file#options}
         * */ 
        if (attrs.sortableConfig) {
            import('sortablejs').then(({ Sortable }) => {
                Sortable.create(this, {
                    ...attrs.sortableConfig
                });
            })
        }

    }

}
,
{
    extends: HTMLElement.extends?.(HTMLLIElement)
})