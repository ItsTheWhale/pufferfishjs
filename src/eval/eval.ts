import { handleTrigger } from "../trigger/trigger.js";

export function handleEval() {
    const elements = document.querySelectorAll("[p-eval]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object") continue;

        const code = elements[i].getAttribute("p-eval") ?? "";

        handleTrigger(elements[i], () => {
            eval(code);
        });

        elements[i].removeAttribute("p-eval");
    }
}