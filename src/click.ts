export function handleClick() {
    const elements = document.querySelectorAll("[p-click]");
    for (const i in elements) {
        if (typeof(elements[i]) !== "object") continue;
        const code = elements[i].getAttribute("p-click") ?? "";
        elements[i].addEventListener("click", () => window.eval(code));
        elements[i].removeAttribute("p-click");
    }
};