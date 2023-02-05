import { handleClick } from "./click.js";
import { handleClickOnce } from "./clickonce.js";
import { handleTextInterpolation } from "./text-interpolate.js";
import { handleAttributeInterpolation } from "./attribute-interpolate.js";
import { handlePost } from "./post.js";
import { handleGet } from "./get.js";
import { handlePut } from "./put.js";

// @ts-ignore
window.Puffer = {
    render(): void {
        handleClick();
        handleClickOnce();
        handleTextInterpolation();
        handleAttributeInterpolation();
        handlePost();
        handleGet();
        handlePut();
    }
};

window.addEventListener("load", () => {
    // @ts-ignore
    window.Puffer.render();
});