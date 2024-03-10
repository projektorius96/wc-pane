export const wc_list = [...import.meta.url.split('/').reverse()][1];
customElements.define(wc_list, class extends HTMLLIElement {

    constructor({ name, attrs = {} }) {

        super();

        const styling$global = new CSSStyleSheet();
        styling$global
        .insertRule(attrs.cssRuleOverride || /* style */`
            ${this.tagName.toLowerCase()} > ul, ol {
                margin: 0;
                padding: 0;
                text-align: center;
            }
        `);
        document.adoptedStyleSheets.push(styling$global)

        this.style.cssText = /* style */`
            width: 100%;
            display: flex;
            margin: 0;
            padding: 0;
            flex-direction: column;
            list-style-type: none;
        `;

        this.name = name;
        // DEV_NOTE # if block accommodated particularly towards project:konva-layers
        if (attrs.loopData[1]?.length > 0) {
            ;[...attrs.loopData[1]].forEach((item, j) => {
                attrs.loopData[0].call(this, item, j)
            })
        }

        /**
         * {@link https://github.com/SortableJS/Sortable?tab=readme-ov-file#options}
         * */ 
        if (attrs.sortableConfig) {
            import('sortablejs').then(({ Sortable }) => {
                Sortable.create(this, {
                    ...attrs.sortableConfig
                })
            })
        }

    }

}
,
{
    extends: HTMLElement.extends?.(HTMLLIElement)
})