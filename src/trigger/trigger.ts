export function handleTrigger(element: Element, callback: Function) {
    let trigger = [];
    let once = false;

    if (element.getAttribute("p-trigger")) element.getAttribute("p-trigger")?.split(/ /)
        .forEach(attr => {
            if (attr.toLowerCase() === "once") once = true;
            else trigger.push(attr);
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
        element.addEventListener(trigger[i], callback as EventListener, { once });
    }
}