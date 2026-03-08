import { applyFullWidthControlStyles, applyFlexColumnStyles } from '../../styles/shared.js';

export default function setStyling(attrs){
    applyFlexColumnStyles(this);
    applyFullWidthControlStyles(this);
    this.style.listStyleType = 'none';
    const attrsCssRuleOverride = new CSSStyleSheet();
        attrsCssRuleOverride
        .insertRule(attrs.cssRuleOverride || /* css */`
            ${this.tagName.toLowerCase()} > ul, ol {
                margin: 0;
                padding: 0;
                text-align: center;
            }
        `);

    return attrsCssRuleOverride;
}