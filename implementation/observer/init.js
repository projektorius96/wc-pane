import Observer from "component-observer";
import { ENUMS } from "../renderer/utils";

const
    { ATTRIBUTE, ID } = ENUMS
    ,
    { min, max, value, step } = ATTRIBUTE
    ;
console.log(new URLSearchParams((new URL(import.meta.url))))
document.body.appendChild(
    Observer({
        id: ID.input_schema || Reflect.construct(URL, [import.meta.url]).searchParams.get('observerId')
        ,
        observings: new Map([
            [ min , String(1) ],
            [ max , String(360) ],
            [ step , String(1) ],
            [ value , String(1) ],
        ])
        ,
        lifecycle: {
            isMounted: ()=> console.log('mounted')
            ,
            isObserved
            ,
            isDestroyed: ()=> console.log('destroyed')

        }
    })
);

function isObserved(attribute, oldValue, newValue) {

    switch (attribute) {

        case value : {
            console.log(`Upgrading ${attribute} to ${newValue}`)
            break;
        }
        case min : {
            if (Observer.hasChanged(oldValue, newValue)) {
                console.log(`Upgrading ${attribute} to ${newValue}`)
            }
            break;
        }
        case max : {            
            if (Observer.hasChanged(oldValue, newValue)) {
                console.log(`Upgrading ${attribute} to ${newValue}`)
            }
            break;
        }
        case step : {
            if (Observer.hasChanged(oldValue, newValue)) {
                console.log(`Upgrading ${attribute} to ${newValue}`)
            }
            break;
        }

    }
    
}