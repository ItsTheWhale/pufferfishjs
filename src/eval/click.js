export function handleClick() {
    var _a;
    const elements = document.querySelectorAll("[p-click]");
    for (const i in elements) {
        if (typeof (elements[i]) !== "object")
            continue;
        const code = (_a = elements[i].getAttribute("p-click")) !== null && _a !== void 0 ? _a : "";
        elements[i].addEventListener("click", () => window.eval(code));
        elements[i].removeAttribute("p-click");
    }
}
;
