export function handleTrigger(element: Element, callback: Function) {
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

    if (element.getAttribute("p-trigger")) element.getAttribute("p-trigger")?.split(/ /)
        .forEach(attr => {
            if (attr.toLowerCase() === "once") once = true;
            else trigger = attr;
        });

    element.addEventListener(trigger, callback as EventListener, { once });
}