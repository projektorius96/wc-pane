export function setDefaultStyling(type){

    defaults:;
    this.style.width = "100%";
    this.style.border = "1px dashed black";

    switch(type){
        case 'text':
            this.style.backgroundColor = "#F7F7F7";
        break;
    }

}

export function setAttributes(el, attrs) {
    for (var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}