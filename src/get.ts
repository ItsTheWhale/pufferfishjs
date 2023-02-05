import { handleTrigger } from "./trigger.js";

export function handleGet() {
    const elements = document.querySelectorAll("[p-get]");
    for (const i in elements) {
        if (typeof(elements[i]) !== "object") continue;

        const postUrl = elements[i].getAttribute("p-get") ?? "";

        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("GET", postUrl);
            xhr.send();
        });
    }
};