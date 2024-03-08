export default void function DOMconfigs(){
    EventTarget.prototype.on = EventTarget.prototype.addEventListener;
    EventTarget.prototype.rm = EventTarget.prototype.removeEventListener;
    EventTarget.prototype.send = EventTarget.prototype.dispatchEvent;
}()

export const [
    UNDERSCORE, 
    HYPHEN,
    SOLIDUS,
] = [
    new RegExp('\u{005F}').source,
    new RegExp('\u{002D}').source,
    new RegExp('\u{002F}').source[1],

];

/**
 * 
 * @param {String} import_meta - {import.meta} ;
 * @returns equivalent of {__fileName} in Node.js CJS's system ;
 */
export function getDirname(import_meta, argv=1){
    const path = import_meta?.url.split(`${SOLIDUS}`).reverse();
    return path[argv]; 
}
