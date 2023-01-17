export function handleTextInterpolation() {
    var _a, _b, _c, _d, _e;
    const searchRegEx = /(?<!\\){{[^}]+}}/g;
    let textNodes = [];
    let n, a = [];
    let walk = document.createTreeWalker(document, NodeFilter.SHOW_TEXT, null);
    while (n = walk.nextNode())
        textNodes.push(n);
    for (const i in textNodes) {
        if (!((_a = textNodes[i].textContent) === null || _a === void 0 ? void 0 : _a.match(searchRegEx)))
            continue;
        let text = (_b = textNodes[i].textContent) !== null && _b !== void 0 ? _b : "";
        const matches = text.match(searchRegEx);
        for (const j in matches) {
            textNodes[i].textContent = (_e = (_c = textNodes[i].textContent) === null || _c === void 0 ? void 0 : _c.replace(matches[j], ((_d = window[matches[j].slice(2, -2).trim()]) !== null && _d !== void 0 ? _d : "") + "")) !== null && _e !== void 0 ? _e : "";
        }
    }
}
