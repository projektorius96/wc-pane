/**
 * Creates a Proxy-based "print" enum: any property accessed on it simply
 * returns its own key as a string (e.g. `printProxy.foo === 'foo'`).
 *
 * Shared by `implementation/utils.js` and `implementation/renderer/utils.js`
 * so the same Proxy handler is defined once instead of being duplicated.
 *
 * @returns {ProxyHandler<object>} a fresh Proxy instance.
 */
export function createPrintProxy() {
    return new Proxy(
        Object.create(null)
        ,
        {
            get(_target, key) {
                return `${key}`;
            }
        }
    );
}


/**
 * Single enum module: Proxy-based ENUM returns property name as string.
 * ENUMS aggregates all logical groups used across the codebase.
 *
 * @example
 * ENUM.give;  // 'give'
 * ENUM.me;    // 'me'
 * ENUMS.COLOR.black; // 'black'
 */
const Print = createPrintProxy();

const 
    [PRINT, COLOR, SHAPE, UI_EVENT, CASE, ATTRIBUTE, ID] = Array(7).fill(Print)
    ,
    ENUMS = Object.freeze({
        PRINT,
        COLOR,
        SHAPE,
        UI_EVENT,
        CASE,
        ATTRIBUTE,
        ID,
    })
    ;

/**
 * 
 * @param {Object} object 
 * @returns an instance of deeply (not just shallowly) immutable object
 */
function deepFreeze(object) {
    // Retrieve the property names defined on object
    const propNames = Object.getOwnPropertyNames(object);

    // Freeze properties before freezing self
    for (const name of propNames) {
        const value = object[name];

        // Recursively freeze if the value is an object or array
        if (value && typeof value === ATTRIBUTE.object) {
            deepFreeze(value);
        }
    }

    return Object.freeze(object);
}


export { ENUMS, deepFreeze };
