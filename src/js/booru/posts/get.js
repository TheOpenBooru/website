import Settings from "js/settings";
import { Post } from "js/booru/types";

export default async function get(id, cache = true): Post {
    let url = `${Settings.apiUrl}/post/${id}`;
    let r = await fetch(url, { cache: cache ? "default" : "no-cache" });
    if (r.status === 404) {
        throw new Error("Post Not Found");
    } else {
        let json = await r.json();
        return json;
    }
}