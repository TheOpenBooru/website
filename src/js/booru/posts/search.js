import SettingsDefaults from "js/settings";
import { Post, PostQuery } from "js/booru/types";

export default async function search(query: PostQuery, index = 0, limit = 100): Array<Post> {
    let params = new URLSearchParams();

    for (let key in query) {
        let value = query[key];
        if (value || key === "descending") {
            if (Array.isArray(value)) {
                value.forEach((v) => params.append(key, v));
            } else {
                params.set(key, value);
            }
        }
    }
    params.set("descending", query.descending); // Descending by default is true and fucks with the default detection. TODO: Refactor
    params.set("index", index);
    params.set("limit", limit);
    
    let url = SettingsDefaults.apiUrl + "/posts/search?" + params.toString();
    let r = await fetch(url, { cache: "force-cache" });
    if (r.ok) {
        return await r.json();
    } else {
        throw new Error("Search Error");
    }
}
