import { handleOnClick } from "./onclick/onclick.js";
import { handleInterpolate } from "./interpolate/interpolate.js";
import { handleHttp } from "./http/http.js";
import { handleEval } from "./eval/eval.js";
// @ts-ignore
window.Puffer = {
    render() {
        handleOnClick();
        handleInterpolate();
        handleHttp();
        handleEval();
    }
};
window.addEventListener("load", () => {
    // @ts-ignore
    window.Puffer.render();
});
