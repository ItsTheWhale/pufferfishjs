import { handleTrigger } from "./trigger.js";

export function handlePost() {
    const elements = document.querySelectorAll("[p-post]");
    for (const i in elements) {
        if (typeof(elements[i]) !== "object") continue;

        const postUrl = elements[i].getAttribute("p-post") ?? "";

        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("POST", postUrl);
            xhr.send();
        });
    }
};