import { handleTrigger } from "./trigger.js";

export function handlePatch() {
    const elements = document.querySelectorAll("[p-patch]");
    for (const i in elements) {
        if (typeof(elements[i]) !== "object") continue;

        const postUrl = elements[i].getAttribute("p-patch") ?? "";

        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("PATCH", postUrl);
            xhr.send();
        });

        elements[i].removeAttribute("p-patch");
    }
};