export function handleAttributeInterpolation() {
    const searchRegEx = /(?<!\\){{[^}]+}}/g;

    let attributes = [];

    let n, a = [];
    let walk = document.createTreeWalker(
        document,
        NodeFilter.SHOW_ELEMENT,
        null
    );
    while (n = walk.nextNode()) {
        // @ts-ignore
        if (n?.attributes === undefined) continue;
        // @ts-ignore
        for (const i in n.attributes) {
            // @ts-ignore
            if (n.attributes[i].value === undefined) continue;
            // @ts-ignore
            if (n.attributes[i].value.match(searchRegEx)) attributes.push(n.attributes[i]);
        }
    };

    for (const i in attributes) {
        let text = attributes[i].value ?? "";

        const matches: any = text.match(searchRegEx);

        for (const j in matches) {
            attributes[i].value = attributes[i].value.replace(matches[j], (window[matches[j].slice(2, -2).trim()] ?? "") + "") ?? "";
        }
    }
}