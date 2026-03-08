import { Print } from "./utils.js";
import { Pane, Input, Label } from "../src/index.js";

/**
 * @alias
 */
const [ID, ATTR_TYPE, UI_EVENT] = 
    Array(3).fill(Print)
    ,
    { text: input, range, checkbox } = ATTR_TYPE
    ;

const GUI = new Pane({container: document.body, draggable: true, hidden: false, position: Print.right, opacity: 1})
    GUI.addGroup({name: ID.slider, open: true, nodes: GUI.addSection({sectionCount: 2, /* accessor: 'child' (DEFAULT) , */})})
    GUI.addGroup({name: ID.describer, open: !true, nodes: GUI.addSection({})})
    GUI.addGroup({name: ID.layer_manager, override_label: "layer-manager", open: !true, nodes: GUI.addSection({accessor: Print.slot})})

const rangeParams = {
    min: 1,
    max: 360,
    step: 1,
    value: 1
}

/* === GUI.describer === */
const describer = GUI.find({name: ID.describer}).children;
describer.child1.append(
        /* new Label({description: "Sticky note"}), */
        new Input({name: ID.text_handle, type: input})
)
GUI.find({name: ID.text_handle}).on(UI_EVENT.input, (e)=>console.log(e.target.value))
/* === GUI.slider === */
const slider = GUI.find({name: ID.slider}).children;
slider.child1.append(
    /* new Label({description: "rotation"}), */
    new Input({name: ID.range, type: range, attrs: {...rangeParams}})
);
GUI.find({name: ID.range}).on(UI_EVENT.input, function() {
    console.log(this.value)
});
/* === GUI.checkboxer === */
slider.child1.append(
    new Label({description: "clock wise", textAlign: Print.center}),
    new Input({name: Print.tick1, type: checkbox/* , attrs: {cboxScaling: 1.5} */})
)
GUI.find({name: Print.tick1}).on(UI_EVENT.change, (e)=>console.log(e.target.checked))
/* === GUI.layerManager */
const layerManager = GUI.find({name: ID.layer_manager}).children;
layerManager.slot1.appendChild(
    new Input.List({
    name: ID.layer_manager, 
    attrs: {
        loopData: [
            function(item, index){ 
                const ul = document.createElement(HTMLElement.extends?.(HTMLUListElement));
                    ul.textContent = `No.${1+index} : ${item}`;
                this.appendChild(ul);
            }
            , 
            [
                ...Array.from({length: 3}).fill( Math.random() )
            ]
        ], 
        sortableConfig: {
            animation: 150,
            onChange: function(e) {
                    console.log(e);
            }
        }
    }
    })
)