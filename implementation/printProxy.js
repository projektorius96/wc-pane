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
