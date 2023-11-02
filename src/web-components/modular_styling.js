export default function setDefaultStyling(type){

    defaults:;
    this.style.width = "100%";
    this.style.border = "1px dashed black";

    switch(type){
        case 'text':
            this.style.backgroundColor = "#F7F7F7";
        break;
    }

}