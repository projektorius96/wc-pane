/**
 * Derives a custom-element tag name from the URL of the module calling it.
 *
 * Every `web-components/<tag-name>/index.js` module lives inside a folder
 * that is itself named after the tag it registers, so the tag name can be
 * read straight off the module's own path instead of being hand-typed (and
 * risking a mismatch with the folder name) in every component file.
 *
 * @param {string} moduleUrl - pass `import.meta.url` from the calling module.
 * @returns {string} the parent folder name of `moduleUrl`, used as the tag name.
 */
export function getTagNameFromModuleURL(moduleUrl) {
    return (new URL(moduleUrl)).pathname.split('/').at(-2);
}
