import './renderer/init.js?'
import { Pane, Input, Label } from "../src/index.js";
import { Print } from "./utils";

/**
 * @alias
 */
const [ID, ATTR_TYPE, UI_EVENT] = 
    Array(3).fill(Print)
    ,
    { text: input, range, checkbox } = ATTR_TYPE
    ;

/* === GUI.slider === */
const GUI = new Pane({container: document.body.children[0].children.footer, draggable: true, hidden: false, position: Print.right, opacity: 1})
    GUI.addGroup({name: ID.slider, nodes: GUI.addSection({flex_direction: Print.row})})

let isChecked = false;
const rangeParams = {
    min: 0,
    max: 360,
    step: 1,
    value: 1
}
const sense = new Map([
    [false, -1],
    [true, 1]
]);
const slider = GUI.find({name: ID.slider}).children;
slider.child1.append(
    new Input({name: Print.tick1, type: checkbox}),
    new Input({name: ID.range, type: range, attrs: {...rangeParams}})
);
GUI.find({name: Print.tick1}).on(UI_EVENT.change, (e)=>{
    isChecked = e.target.checked;
})
GUI.find({name: ID.range}).on(UI_EVENT.input, function() {
    const 
        targetElement = document.getElementById("circle_top")
        ,
        allPoints = targetElement?.getPoints()
    ;    
    // Vekt.js-light API
    targetElement?.setPoints(
        allPoints.slice(rangeParams.min, (sense.get(isChecked) * Number(this.value))+1)
    )
});