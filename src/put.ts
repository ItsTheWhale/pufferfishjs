import { handleTrigger } from "./trigger.js";

export function handlePut() {
    const elements = document.querySelectorAll("[p-put]");
    for (const i in elements) {
        if (typeof(elements[i]) !== "object") continue;

        const postUrl = elements[i].getAttribute("p-put") ?? "";

        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("PUT", postUrl);
            xhr.send();
        });

        elements[i].removeAttribute("p-put");
    }
};