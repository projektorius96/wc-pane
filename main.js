import { Pane, Input, Label } from "./src/index.js";
import package_json from './package.json' with { type: 'json' };

document.on('DOMContentLoaded', ()=>{
    document.title = package_json.name;
});

const GUI = new Pane({container: document.body, draggable: true, hidden: false, position: 'right', opacity: 1})
    GUI.addGroup({name: 'slider', open: true, nodes: GUI.addSection({/* accessor: 'child' (DEFAULT) , */sectionCount: 2})})
    GUI.addGroup({name: 'describer', open: !true, nodes: GUI.addSection({accessor: 'greet'})})
    GUI.addGroup({name: 'layer-manager', override_label: "", open: !true, nodes: GUI.addSection({accessor: 'slot'})})

const rangeParams = {
    min: 1,
    max: 360,
    step: 1,
    value: 1
}

/* === GUI.describer === */
const describer = GUI.find({name: 'describer'}).children;
describer.greet1.append(
        new Label('name it'),
        new Input({name: 'text_handle', type: 'text'})
)
GUI.find({name: 'text_handle'}).on('input', (e)=>console.log(e.target.value))
/* === GUI.slider === */
const slider = GUI.find({name: 'slider'}).children;
const range = new Input({name: 'range', attrs: {...rangeParams}})
slider.child1.append(
    new Label('rotation'),
    range
);
GUI.find(range).on('input', function(){
    console.log(this.value)
});
/* === GUI.checkboxer === */
const checkboxer = {name: 'tick1'}
slider.child1.append(
    new Label('clock-wise'),
    new Input({...checkboxer, type: 'checkbox'/* , attrs: {cboxScaling: 1.5} */})
)
GUI.find(checkboxer).on('change', (e)=>console.log(e.target.checked))
/* === layerManager */
const layerManager = GUI.find({name: 'layer-manager'}).children;
layerManager.slot1.appendChild(
    new Input.List({
    name: "layer-manager", 
    attrs: {
        loopData: [
            function(item, index){ 
                const ul = document.createElement(HTMLElement.extends?.(HTMLUListElement));
                    ul.textContent = `No.${1+index} : ${item}`;
                this.appendChild(ul);
            }
            , 
            [
                ...Array.from({length: 3}).fill(Math.random())
            ]
        ], 
        sortableConfig: {
            animation: 150,
            onChange: function(e){
                    console.log(e)
            }
        }
    }
    })
)