import { HTMLCanvas, XMLSVG } from 'vekt.js-light';
import { ENUMS } from './utils.js';
import Stage from './bootstrap.js';

document.on(ENUMS.UI_EVENT.DOMContentLoaded, ()=>{

    const
        stage = Stage.setup({HTMLCanvas, XMLSVG});  

    window.on(ENUMS.UI_EVENT.resize, ()=>{
        
        HTMLCanvas
            .init({stage, container: document.getElementById( ENUMS.ID.header )})
                .on( Stage.renderer.bind(null, {HTMLCanvas, XMLSVG}) );
        
    });

    // DEV_NOTE (!) # This allows to initiate `<canvas>` hosted "bitmap" with internal context without waiting `window.onresize` to be triggered by end-user
    window.dispatch( new Event( ENUMS.UI_EVENT.resize ) );

});