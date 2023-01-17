import { handleClick } from "./click.js";
import { handleClickOnce } from "./clickonce.js";
import { handleTextInterpolation } from "./text-interpolate.js";

// @ts-ignore
window.Puffer = {
    render(): void {
        handleClick();
        handleClickOnce();
        handleTextInterpolation();
    }
};

window.addEventListener("load", () => {
    // @ts-ignore
    window.Puffer.render();
});