export function handleTrigger(element, callback) {
    var _a;
    let trigger = [];
    let once = false;
    if (element.getAttribute("p-trigger"))
        (_a = element.getAttribute("p-trigger")) === null || _a === void 0 ? void 0 : _a.split(/ /).forEach(attr => {
            if (attr.toLowerCase() === "once")
                once = true;
            else
                trigger.push(attr);
        });
    if (trigger.length === 0) {
        switch (element.tagName) {
            case "input":
                trigger.push("change");
                break;
            case "textarea":
                trigger.push("change");
                break;
            case "form":
                trigger.push("submit");
                break;
            default:
                trigger.push("click");
        }
    }
    for (let i in trigger) {
        element.addEventListener(trigger[i], callback, { once });
    }
}
