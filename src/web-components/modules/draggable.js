export default function (_this){
    let guiElement = null;
            function mousemove(e){
                    guiElement.style.left = `${e.pageX}px`;
                    guiElement.style.top = `${e.pageY}px`;
            }
            function mouseup(){
                document.removeEventListener(mousemove.name, mousemove)
                guiElement = null;
            }
            function mousedown(e){
                if (guiElement === null) {
                    guiElement = e.currentTarget;
                }
                const { altKey } = e;
                if    ( altKey )   {
                    e.preventDefault()
                    document.addEventListener(mousemove.name, mousemove)
                } 
            }
            _this.on(mousedown.name, mousedown)
            document.on(mouseup.name, mouseup)
}