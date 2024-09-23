export default function({container, opacity, position = 'left', minWidth = 15}){

    this.style.cssText = /* style */`
            user-select: none;
            position: absolute;
                z-index:999;
            justify-self: ${(container.style.display = 'grid') && position};
            min-width: ${minWidth}%;
            border: 2px solid black;
            border-radius: 0.5em;
            padding: 0.5em;
            background-color: #d8d8d8;
            opacity: ${opacity};
        `;

    return true;

}