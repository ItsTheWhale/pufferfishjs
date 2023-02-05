import { handleTrigger } from "./trigger.js";
export function handlePost() {
    var _a;
    const elements = document.querySelectorAll("[p-post]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object")
            continue;
        const postUrl = (_a = elements[i].getAttribute("p-post")) !== null && _a !== void 0 ? _a : "";
        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", postUrl);
            xhr.send();
        });
        elements[i].removeAttribute("p-post");
    }
}
;
