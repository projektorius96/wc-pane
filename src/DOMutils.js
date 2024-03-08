export default void function DOMconfigs(){
    EventTarget.prototype.on = EventTarget.prototype.addEventListener;
    EventTarget.prototype.rm = EventTarget.prototype.removeEventListener;
    EventTarget.prototype.send = EventTarget.prototype.dispatchEvent;
    HTMLElement.extends = (HTML_x_Element)=> /HTML(.+)Element/.exec(HTML_x_Element?.name)?.[1].toLowerCase();
}();

export const [
    UNDERSCORE, 
    HYPHEN,
] = [
    new RegExp('\u{005F}').source,
    new RegExp('\u{002D}').source,
];
