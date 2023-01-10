export function handleClickOnce() {
    var _a;
    const elements = document.querySelectorAll("[p-clickonce]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object")
            continue;
        const code = (_a = elements[i].getAttribute("p-clickonce")) !== null && _a !== void 0 ? _a : "";
        function listenerFunction() {
            eval(code);
            elements[i].removeEventListener("click", listenerFunction);
        }
        elements[i].addEventListener("click", listenerFunction);
        elements[i].removeAttribute("p-clickonce");
    }
}
;
