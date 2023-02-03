export function handleTextInterpolation() {
    const searchRegEx = /\\?{{[^}]+}}/g;
    const interpolateRegEx = /(?<!\\){{[^}]+}}/g;
    const escapedRegEx = /\\{{[^}]+}}/g;
    let textNodes = [];

    let n, a = []
    let walk = document.createTreeWalker(
        document,
        NodeFilter.SHOW_TEXT,
        null
    );
    while (n = walk.nextNode()) textNodes.push(n);

    for (const i in textNodes) {
        if (!textNodes[i].textContent?.match(searchRegEx)) continue;

        let text = textNodes[i].textContent ?? "";

        const matches: any = text.match(searchRegEx);

        for (const j in matches) {
            if (matches[j].match(interpolateRegEx)) textNodes[i].textContent = textNodes[i].textContent?.replace(matches[j], (window[matches[j].slice(2, -2).trim()] ?? "") + "") ?? "";
            else if (matches[j].match(escapedRegEx)) textNodes[i].textContent = textNodes[i].textContent?.replace(matches[j], matches[j].substring(1) ?? "") ?? "";
        }
    }
}