export function handleAttributeInterpolation() {
    var _a, _b, _c;
    const searchRegEx = /(?<!\\){{[^}]+}}/g;
    let attributes = [];
    let n, a = [];
    let walk = document.createTreeWalker(document, NodeFilter.SHOW_ELEMENT, null);
    while (n = walk.nextNode()) {
        // @ts-ignore
        if ((n === null || n === void 0 ? void 0 : n.attributes) === undefined)
            continue;
        // @ts-ignore
        for (const i in n.attributes) {
            // @ts-ignore
            if (n.attributes[i].value === undefined)
                continue;
            // @ts-ignore
            if (n.attributes[i].value.match(searchRegEx))
                attributes.push(n.attributes[i]);
        }
    }
    ;
    for (const i in attributes) {
        let text = (_a = attributes[i].value) !== null && _a !== void 0 ? _a : "";
        const matches = text.match(searchRegEx);
        for (const j in matches) {
            attributes[i].value = (_c = attributes[i].value.replace(matches[j], ((_b = window[matches[j].slice(2, -2).trim()]) !== null && _b !== void 0 ? _b : "") + "")) !== null && _c !== void 0 ? _c : "";
        }
    }
}
