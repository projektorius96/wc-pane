export default void function DOMconfigs(){
    EventTarget.prototype.on = EventTarget.prototype.addEventListener;
    EventTarget.prototype.rm = EventTarget.prototype.removeEventListener;
    EventTarget.prototype.send = EventTarget.prototype.dispatchEvent;
}()

export const [
    U, H
] = [
    new RegExp('\u{005F}').source, new RegExp('\u{002D}').source
];
