import { handleTrigger } from "../trigger/trigger.js";
export function handleGet() {
    var _a;
    const elements = document.querySelectorAll("[p-get]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object")
            continue;
        const postUrl = (_a = elements[i].getAttribute("p-get")) !== null && _a !== void 0 ? _a : "";
        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", postUrl);
            xhr.send();
        }, "get");
        elements[i].removeAttribute("p-get");
    }
}
;
