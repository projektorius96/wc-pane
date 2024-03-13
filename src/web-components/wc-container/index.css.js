export default function({container, position = 'left', minWidth = 15}){
    this.style.cssText = /* style */`
        user-select: none;
            position: absolute;
                z-index:999;
            justify-self: ${(container.style.display = 'grid') && position};
            min-width: ${minWidth}%;
            border: 2px solid black;
            border-radius: 8px;
            padding: 8px;
            background-color: #d8d8d8;
        `;

    return true;
}