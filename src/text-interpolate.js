export function handleTextInterpolation() {
    var _a, _b, _c, _d, _e, _f;
    const searchRegEx = /(?<!\\){{[^}]+}}/g;
    let textNodes = [];
    let n, a = [];
    let walk = document.createTreeWalker((_a = document.querySelector("html")) !== null && _a !== void 0 ? _a : document.createElement("html"), NodeFilter.SHOW_TEXT, null);
    while (n = walk.nextNode())
        textNodes.push(n);
    for (const i in textNodes) {
        if (!((_b = textNodes[i].textContent) === null || _b === void 0 ? void 0 : _b.match(searchRegEx)))
            continue;
        let text = (_c = textNodes[i].textContent) !== null && _c !== void 0 ? _c : "";
        const matches = text.match(searchRegEx);
        for (const j in matches) {
            textNodes[i].textContent = (_f = (_d = textNodes[i].textContent) === null || _d === void 0 ? void 0 : _d.replace(matches[j], ((_e = window[matches[j].slice(2, -2).trim()]) !== null && _e !== void 0 ? _e : "") + "")) !== null && _f !== void 0 ? _f : "";
        }
    }
}
