export default function setStyling(type, attrs){

    defaults:;
        this.style.width = "100%";
        this.style.margin = 0;
        this.style.padding = 0;

    switch(type){
        case 'text':
            this.style.backgroundColor = "#F7F7F7";
        break;
        case 'checkbox':
            this.style.transform = `scale(${attrs?.cboxScaling || 1.24})`;
        break;
    }

    return true;

}