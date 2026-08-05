import './renderer/init.js'
import { Pane, Input, Label } from "../src/index.js";
import { Print } from "./utils.js";

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

const rangeParams = {
    min: 2,
    max: 360,
    step: 1,
    value: 2
};
rangeParams.max = 360 + rangeParams.min

GUI.find({name: ID.slider})
    .children.child1.append(
        new Input({name: Print.tick1, type: checkbox}),
        new Input({name: ID.range, type: range, attrs: {...rangeParams}})
    );
export const sliderSwitch = GUI.find({name: Print.tick1})
export const slider = GUI.find({name: ID.range})
    Object.assign(slider, { rangeParams })