import Settings from "js/settings";
import { Post, PostQuery } from "js/booru/types";

export default async function search(search_query: PostQuery, index = 0, limit = 100): Promise<Array<Post>> {
    // Reassign to prevent mutations
    let query = Object.assign({}, search_query)

    Settings.TagBlacklist.forEach((tag) => {
        if (query.include_tags.includes(tag)) return
        query.exclude_tags.push(tag);
    })

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
    params.set("descending", query.descending.toString()); // Descending by default is true and fucks with the default detection. TODO: Refactor
    params.set("index", index.toString());
    params.set("limit", limit.toString());
    
    let url = Settings.apiUrl + "/posts/search?" + params.toString();
    let r = await fetch(url);
    if (r.ok) {
        return await r.json();
    } else {
        throw new Error("Search Error");
    }
}
