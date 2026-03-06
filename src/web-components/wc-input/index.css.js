import { applyFullWidthControlStyles } from '../../styles/shared.js';

export default function setStyling(type, attrs) {

    defaults:;
        applyFullWidthControlStyles(this);

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