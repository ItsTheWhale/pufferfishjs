import { handleClick } from "./click.js";
import { handleClickOnce } from "./clickonce.js";
// @ts-ignore
window.Puffer = {
    render() {
        handleClick();
        handleClickOnce();
    }
};
