export const wc_list = [...import.meta.url.split('/').reverse()][1];
customElements.define(wc_list, class extends HTMLLIElement {

    constructor({ name, attrs = {} }) {

        super();

        this.style.cssText = /* style */`
            width: 100%;
            display: flex;
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

        if (attrs.sortableList) {
            import('sortablejs').then(({ Sortable }) => {
                Sortable.create(this, {
                    ...attrs.sortableList
                })
            })
        }

    }

}
,
{
    extends: HTMLElement.extends?.(HTMLLIElement)
})