export function handleClickOnce() {
    const elements = document.querySelectorAll("[p-clickonce]");
    for (const i in elements) {
        if (typeof(elements[i]) !== "object") continue;
        const code = elements[i].getAttribute("p-clickonce") ?? "";
        function listenerFunction() {
            window.eval(code);
            elements[i].removeEventListener("click", listenerFunction);
        }
        elements[i].addEventListener("click", listenerFunction);
        elements[i].removeAttribute("p-clickonce");
    }
};