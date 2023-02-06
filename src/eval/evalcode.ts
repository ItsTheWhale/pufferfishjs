import { handleTrigger } from "../trigger/trigger.js";

export function handleEvalCode() {
    const elements = document.querySelectorAll("[p-eval]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object") continue;

        const code = elements[i].getAttribute("p-eval") ?? "";

        handleTrigger(elements[i], () => {
            window.eval(code);
        });

        elements[i].removeAttribute("p-eval");
    }
}