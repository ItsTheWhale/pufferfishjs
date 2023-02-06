import { handleInterpolate } from "./interpolate/handleinterpolate.js";
import { handleHttp } from "./http/handlehttp.js";
import { handleEval } from "./eval/handleeval.js";
// @ts-ignore
window.Puffer = {
    render() {
        handleInterpolate();
        handleHttp();
        handleEval();
    }
};
window.addEventListener("load", () => {
    // @ts-ignore
    window.Puffer.render();
});
