export default function({hidden, position, opacity}){

    this.style.cssText = /* style */`
            display: ${ hidden ? 'none' : 'flex' };
            justify-self: ${ position };
            opacity: ${ opacity };
                flex-direction: column;
            user-select: none;
            width: fit-content;
            border: 2px solid black;
                border-radius: 0.5em;
            padding: 0.5em;
            background-color: #d8d8d8;
    `;

    return true;

}