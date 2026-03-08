export default function({opacity, hidden, position, minWidth}){

    this.style.cssText = /* css */`
            opacity: ${ opacity };
            display: ${ hidden ? 'none' : 'inline-flex' };
                justify-self: ${ position };
                flex-direction: column;
            user-select: none;
            overflow: hidden;
            width: fit-content;
            border: 2px solid black;
                border-radius: 0.5em;
            padding: 0.5em;
            background-color:rgb(232, 232, 232);
    `;

    /**
     * @description iff `window.innerHeight` greater than `window.innerWidth`, then the `isMobile` will hold `true` (hence "Mobile"), otherwise it holds `false`, meaning it includes `landscape` (hence "Desktop")
     */
    const isMobile = 
        screen.orientation.type.includes('portrait');
    if (isMobile) {
        this.dataset.isMobile = isMobile;
        this.style.minWidth = `${100}%`;
        this.style.position = 'absolute';
            this.style.bottom = 0;
    } else {
        this.dataset.isMobile = isMobile;
        this.style.minWidth = `${minWidth}%`;
        this.style.position = '';
            this.style.bottom = 'auto';
    }

    return true;

}