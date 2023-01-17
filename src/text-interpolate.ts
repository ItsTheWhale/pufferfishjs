export function handleTextInterpolation() {
    const searchRegEx = /(?<!\\){{[^}]+}}/g;
    let textNodes = [];

    let n, a = []
    let walk = document.createTreeWalker(
        document.querySelector("html") ?? document.createElement("html"), 
        NodeFilter.SHOW_TEXT, 
        null
    );
    while (n = walk.nextNode()) textNodes.push(n);

    for (const i in textNodes) {
        if (!textNodes[i].textContent?.match(searchRegEx)) continue;

        let text = textNodes[i].textContent ?? "";

        const matches: any = text.match(searchRegEx);

        for (const j in matches) {
            textNodes[i].textContent = textNodes[i].textContent?.replace(matches[j], (window[matches[j].slice(2, -2).trim()] ?? "") + "") ?? "";
        }
    }
}