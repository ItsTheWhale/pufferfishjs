import { handleTrigger } from "../trigger/trigger.js";
export function handleDelete() {
    var _a;
    const elements = document.querySelectorAll("[p-delete]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object")
            continue;
        const postUrl = (_a = elements[i].getAttribute("p-delete")) !== null && _a !== void 0 ? _a : "";
        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("DELETE", postUrl);
            xhr.send();
        }, "delete");
        elements[i].removeAttribute("p-delete");
    }
}
;
