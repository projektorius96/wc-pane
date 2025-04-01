export default function({hidden, position, opacity, resizeOnMobile}){

    this.style.cssText = /* style */`
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

        window.addEventListener('resize', ()=>{

            this.style.zIndex = '999';
            if ( window.screen.orientation.type.includes('portrait') ){ 

                this.style.width = `${100}%`;
                this.style.position = 'absolute';
                this.style.bottom = `${0}px`;
                
            } else {

                // DEV_NOTE # emulating "justify-self" behaviour, whenever `position:absolute` is used:..
                switch (position) {
                    case 'left':
                        this.style.left = '0';
                        break;
                    case 'right':
                        this.style.right = '0';
                        break;
                }

                this.style.width = 'fit-content';
                this.style.position = 'absolute';
                this.style.bottom = 'auto';

            }
        })

    }

    return true;

}

export function enableDraggingFor(thisArg, position){
    let guiElement = null;
    function mousemove(e){
            
            if (position === 'right') guiElement.style.right = 'unset' ;

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