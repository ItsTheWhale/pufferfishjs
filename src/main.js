import { handleOnClick } from "./onclick/onclick.js";
import { handleInterpolate } from "./interpolate/interpolate.js";
import { handleHttp } from "./http/http.js";
// @ts-ignore
window.Puffer = {
    render() {
        handleOnClick();
        handleInterpolate();
        handleHttp();
    }
};
window.addEventListener("load", () => {
    // @ts-ignore
    window.Puffer.render();
});
