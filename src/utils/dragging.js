export function enableDraggingFor(/* thisArg *//* , position */) {

    let guiElement = null;

    function mousemove(e) {
        if (!guiElement) return;

        // if (position === 'right') guiElement.style.right = 'unset';

        guiElement.style.position = 'absolute';
        guiElement.style.left = `${e.pageX}px`;
        guiElement.style.top = `${e.pageY}px`;
    }

    function mouseup() {
        document.rm('mousemove', mousemove);
        guiElement = null;
    }

    function mousedown(e) {
        if (guiElement === null) {
            guiElement = e.currentTarget;
        }
        const { altKey } = e;
        if (altKey) {
            e.preventDefault();
            document.on('mousemove', mousemove);
        }
    }

    /* thisArg */this.on('mousedown', mousedown);
    document.on('mouseup', mouseup);
}

