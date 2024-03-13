import { HUD, Input, Label } from "./src/index.js";
import { name } from './package.json';

document.on('DOMContentLoaded', ()=>{
    document.title = name;
});

const GUI = globalThis.GUI = new HUD({container: document.body/* , minWidth: 15, position: 'right', draggable: true */})
    ///* DEV_NOTE # accessor_valueN, N defaults to 1,2,3..n */
    GUI.addGroup({name: 'slider', nodes: GUI.addSection({accessor: 'section', column: 2})})
    GUI.addGroup({name: 'describer', nodes: GUI.addSection({accessor: 'greet', column: 1})})
    GUI.addGroup({name: 'layer-manager', nodes: GUI.addSection({accessor: 'slot'})})

const rangeParams = {
    min: 1,
    max: 360,
    step: 1,
    value: 1
}

/* === describer */
const describer = GUI.find({name: 'describer'}).children;
describer.greet1.append(
        new Label('name it'),
        new Input({name: 'text_handle', type: 'text'})
)
GUI.find({name: 'text_handle'}).on('input', (e)=>console.log(e.target.value))
/* === slider */
const slider = GUI.find({name: 'slider'}).children;
const range = new Input({name: 'range', attrs: {...rangeParams}})
slider.section1.append(
    new Label('rotation'),
    range
);
GUI.find({name: range.name}).on('input', function(){
    console.log(this.value)
});
/* === checkboxer */
const checkboxer = {name: 'tick1'}
slider.section2.append(
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
            function(item, index){ console.log(item, index, this) }
            , 
            [
                Math.random(), Math.random()
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