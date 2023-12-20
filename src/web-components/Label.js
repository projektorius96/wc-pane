export default class wc_label extends HTMLLabelElement {

    constructor(description = ''){
        
        super();

        this.style.cssText = /* style */`
            width: 100%;
            text-align: center;
        `;
        this.textContent = String(description);

        return this;

    }

}