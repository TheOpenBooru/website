import Settings from "js/settings";
import { PostQuery } from "js/booru/types";

export default async function PrimativeSearch(query: PostQuery, index = 0, limit = 100) {
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

    let url = Settings.apiUrl + `/posts/search?${params.toString()}`;
    let r = await fetch(url, { cache: "default" });
    if (r.ok) {
        return await r.json();
    } else {
        return [];
    }
}
