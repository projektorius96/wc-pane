import { HTMLCanvas, XMLSVG } from 'vekt.js-light';
import { userConfig } from './user-config.js';
import Stage from './bootstrap.js';

document.on('DOMContentLoaded', ()=>{

    const
        stage = Stage.setup({HTMLCanvas, XMLSVG});  

    window.on('resize', ()=>{
        
        HTMLCanvas
            .init({stage, container: document.getElementById('header')})
                .on( Stage.renderer.bind(null, {HTMLCanvas, XMLSVG}) );
        
    });

    // DEV_NOTE (!) # This allows to initiate `<canvas>` hosted "bitmap" with internal context without waiting `window.onresize` to be triggered by end-user
    window.dispatch( new Event('resize') );

});