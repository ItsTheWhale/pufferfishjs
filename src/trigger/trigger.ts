export function handleTrigger(element: Element, callback: Function, name?: string) {
    let trigger = [];
    let once = false;
    let timeout = 0;

    if (name !== undefined && element.getAttribute("p-trigger-" + name)) element.getAttribute("p-trigger-" + name)?.split(/ /)
        .forEach(attr => {
            if (attr.toLowerCase() === "once") once = true;
            else if (attr.toLowerCase().startsWith("timeout:")) timeout = Number(attr.substring(8));
            else trigger.push(attr);
        });
    else if (element.getAttribute("p-trigger")) element.getAttribute("p-trigger")?.split(/ /)
        .forEach(attr => {
            if (attr.toLowerCase() === "once") once = true;
            else if (attr.toLowerCase().startsWith("timeout:")) timeout = Number(attr.substring(8));
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
        element.addEventListener(trigger[i], () => {
            setTimeout(callback, timeout);
        }, { once });
    }
}