import { handlePost } from "./post.js";
import { handleGet } from "./get.js";
import { handlePut } from "./put.js";
import { handlePatch } from "./patch.js";
import { handleDelete } from "./delete.js";
export function handleHttp() {
    handlePost();
    handleGet();
    handlePut();
    handlePatch();
    handleDelete();
}
