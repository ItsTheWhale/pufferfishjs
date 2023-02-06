import { handleTrigger } from "../trigger/trigger.js";
export function handleEval() {
    var _a;
    const elements = document.querySelectorAll("[p-eval]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object")
            continue;
        const code = (_a = elements[i].getAttribute("p-eval")) !== null && _a !== void 0 ? _a : "";
        handleTrigger(elements[i], () => {
            eval(code);
        });
        elements[i].removeAttribute("p-eval");
    }
}
