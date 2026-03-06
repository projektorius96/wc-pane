export default function({hidden, position, opacity, resizeOnMobile, mode}){

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

    if (resizeOnMobile){
        this.dataset.resizeOnMobile = 'true';
    } else {
        delete this.dataset.resizeOnMobile;
    }

    this.dataset.position = position;
    this.dataset.mode = mode || 'default';

    return true;

}