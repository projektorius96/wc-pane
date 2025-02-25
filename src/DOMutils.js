EventTarget.prototype.on = EventTarget.prototype.addEventListener;
EventTarget.prototype.rm = EventTarget.prototype.removeEventListener;
EventTarget.prototype.send = EventTarget.prototype.dispatchEvent;

HTMLElement.extends = (HTML_x_Element)=> /HTML(.+)Element/.exec(HTML_x_Element?.name)?.[1].toLowerCase();

/**
 * @typedef {Function} Subroutine
 * 
 * @param {Subroutine} subroutine
 * @returns converts subroutine's returned `undefined` to `true`_ish_ value.
 */
export const TRUE = (subroutine) => !Boolean(subroutine);