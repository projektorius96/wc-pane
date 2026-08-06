export default function({opacity, hidden, position, minWidth}){

    this.style.cssText = /* css */`
            opacity: ${ opacity };
            display: ${ hidden ? 'none' : 'inline-flex' };
                justify-self: ${ position };
                flex-direction: column;
            user-select: none;
            overflow: hidden;
            justify-content: space-around; 
            border: 2px solid black;
                border-radius: 0.5em;
            padding: 0.5em;
            background-color:rgb(232, 232, 232);
    `;

    //
    this.style.setProperty('--min-w', `${minWidth}%`);

    return true;

}