import { handleEvalCode } from "./evalcode.js";
import { handleClick } from "./click.js";
import { handleClickOnce } from "./clickonce.js";

export function handleEval() {
    handleEvalCode();
    handleClick();
    handleClickOnce();
}