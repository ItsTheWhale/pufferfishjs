import { handleTrigger } from "./trigger.js";
export function handlePatch() {
    var _a;
    const elements = document.querySelectorAll("[p-patch]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object")
            continue;
        const postUrl = (_a = elements[i].getAttribute("p-patch")) !== null && _a !== void 0 ? _a : "";
        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("PATCH", postUrl);
            xhr.send();
        });
        elements[i].removeAttribute("p-patch");
    }
}
;
