export function handleTrigger(element, callback) {
    var _a;
    let trigger = "click";
    let once = false;
    switch (element.tagName) {
        case "input":
            trigger = "change";
            break;
        case "textarea":
            trigger = "change";
            break;
        case "form":
            trigger = "submit";
            break;
        default:
            trigger = "click";
    }
    if (element.getAttribute("p-trigger"))
        (_a = element.getAttribute("p-trigger")) === null || _a === void 0 ? void 0 : _a.split(/ /).forEach(attr => {
            if (attr.toLowerCase() === "once")
                once = true;
            else
                trigger = attr;
        });
    element.addEventListener(trigger, callback, { once });
}
