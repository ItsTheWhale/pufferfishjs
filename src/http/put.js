import { handleTrigger } from "../trigger/trigger.js";
export function handlePut() {
    var _a;
    const elements = document.querySelectorAll("[p-put]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object")
            continue;
        const postUrl = (_a = elements[i].getAttribute("p-put")) !== null && _a !== void 0 ? _a : "";
        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("PUT", postUrl);
            xhr.send();
        }, "put");
        elements[i].removeAttribute("p-put");
    }
}
;
