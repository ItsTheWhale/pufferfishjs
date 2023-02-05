import { handleClick } from "./click.js";
import { handleClickOnce } from "./clickonce.js";
import { handleTextInterpolation } from "./text-interpolate.js";
import { handleAttributeInterpolation } from "./attribute-interpolate.js";
import { handlePost } from "./post.js";
// @ts-ignore
window.Puffer = {
    render() {
        handleClick();
        handleClickOnce();
        handleTextInterpolation();
        handleAttributeInterpolation();
        handlePost();
    }
};
window.addEventListener("load", () => {
    // @ts-ignore
    window.Puffer.render();
});
