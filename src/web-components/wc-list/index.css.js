export default function setStyling(attrs){
    this.style.cssText = /* style */`
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0;
        padding: 0;
        list-style-type: none;
    `;
    const attrsCssRuleOverride = new CSSStyleSheet();
        attrsCssRuleOverride
        .insertRule(attrs.cssRuleOverride || /* style */`
            ${this.tagName.toLowerCase()} > ul, ol {
                margin: 0;
                padding: 0;
                text-align: center;
            }
        `);

    return attrsCssRuleOverride;
}