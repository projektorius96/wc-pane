export default class wc_label extends HTMLLabelElement {

    constructor(description = ''){
        
        super();

        const _label = document.createElement('label');
            _label.style.cssText = `
                width: 100%;
                text-align: center;
            `;
            _label.textContent = String(description);

        return (
            _label
        )

    }

}