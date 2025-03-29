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

export function enableDraggingFor(thisArg){
    let guiElement = null;
    function mousemove(e){
            guiElement.style.position = 'absolute';
            guiElement.style.left = `${e.pageX}px`;
            guiElement.style.top = `${e.pageY}px`;
    }
    function mouseup(){
        document.rm('mousemove', mousemove);
        guiElement = null;
    }
    function mousedown(e){
        if (guiElement === null) {
            guiElement = e.currentTarget;
        }
        const { altKey } = e;
        if    ( altKey )   {
            e.preventDefault();
            document.on('mousemove', mousemove);
        } 
    }
    thisArg.on('mousedown', mousedown)
    document.on('mouseup', mouseup)
}