import { handleTrigger } from "../trigger/trigger.js";

export function handleDelete() {
    const elements = document.querySelectorAll("[p-delete]");
    for (const i in elements) {
        if (typeof(elements[i]) !== "object") continue;

        const postUrl = elements[i].getAttribute("p-delete") ?? "";

        handleTrigger(elements[i], () => {
            const xhr = new XMLHttpRequest();
            xhr.open("DELETE", postUrl);
            xhr.send();
        }, "delete");

        elements[i].removeAttribute("p-delete");
    }
};