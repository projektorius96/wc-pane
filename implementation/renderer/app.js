import './globals.css';
import { userConfig } from './user-config.js';
import { defaultVendorFontSize } from './modules/utils.js';
import { slider, sliderSwitch } from '../gui.js';

export default class {

    static setup({ XMLSVG }) {

        return ([
            new XMLSVG.ViewGroup.Container({
                options: { id: 'container' }
            })
        ]);

    }

    static renderer({HTMLCanvas, XMLSVG, ENUMS}) {
        
        /**
         * @dependencies
         */
        const 
            { Trigonometry } = HTMLCanvas.Helpers
            ,
            { Converters } = Trigonometry
        ;
        
        const sense = new Map([
            [false, -1],
            [true, 1]
        ]);
        sliderSwitch.on(ENUMS.UI_EVENT.change, (e)=>{
            isChecked = e.target.checked;
        })
        sliderSwitch.dispatchEvent(new Event(ENUMS.UI_EVENT.input))
        let
            isChecked = false
            ,
            allPoints =
                Trigonometry.setRange(0, 1, slider.rangeParams.max).map((deg) => {
                    return ({
                        x: /* ____________________________________________ */ 1 * Math.cos(Converters.degToRad(sense.get(isChecked) * deg))/*  - 1 */  /* <== removes the annoying radius visible, when the shape is not filled */,
                        y: -1 * Math.sin(Converters.degToRad(sense.get(isChecked) * deg)),
                    });
                })
        ;
        
        const
            [container] = this.setup({ XMLSVG })
        ;    
        XMLSVG.Helpers.findByID(container.id)
            .setPaths([
                new XMLSVG.Views.Path({
                    options: {
                        /* === IMPORTANT */
                        id: ENUMS.ID.circle_top,
                        points: [],
                        scaling: stage.grid.GRIDCELL_DIM,
                        /* IMPORTANT === */
                        stroke: ENUMS.COLOR.green,
                        fill: ENUMS.COLOR.green,
                        dashed: 0,
                        strokeWidth: 1,
                    }
                })
                ]
                ,
                ({ paths }) => Array.from(paths).on((path) => {

                    const PATH_ID = path.id
                    switch (PATH_ID) {/* start_switch:; */
                        case ENUMS.ID.circle_top : {

                            sliderSwitch.on(ENUMS.UI_EVENT.change, (e)=>{
                                isChecked = e.target.checked;
                                    allPoints =
                                        Trigonometry.setRange(0, 1, slider.rangeParams.max).map((deg) => {
                                            return ({
                                                x: /* ____________________________________________ */ 1 * Math.cos(Converters.degToRad(sense.get(isChecked) * deg))/*  - 1 */  /* <== removes the annoying radius visible, when the shape is not filled */,
                                                y: -1 * Math.sin(Converters.degToRad(sense.get(isChecked) * deg)),
                                            });
                                        })
                            })
                            sliderSwitch.dispatchEvent(new Event(ENUMS.UI_EVENT.input))

                            slider.on(ENUMS.UI_EVENT.input, function() {

                                HTMLCanvas.Helpers.transformPath(path, {
                                    transformations: {
                                        /* angle = 0, offsetX = 0, offsetY = 0, skew = {X: 0, Y: 0} */// # [OPTIONAL]
                                    }
                                    ,
                                    afterTransform: ({ path }) => path.setPoints(
                                        allPoints.slice(0, Number(this.value))
                                        ,
                                        Number(path.dataset.scaling)
                                    )
                                });

                            });
                            slider.dispatchEvent(new Event(ENUMS.UI_EVENT.input))

                        break;}
                    /* end_switch:; */}
                    

                })
            );

    }

}