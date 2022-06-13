import Settings from "js/settings";
import { TagQuery } from "./types";

export default class Tags{
    static async search(query: TagQuery) {
        let params = new URLSearchParams();

        for (let key in query) {
            let value = query[key];
            if (!value) continue;
            if (Array.isArray(value)) {
                value.forEach((v) => params.append(key, v));
            } else {
                params.set(key, value);
            }
        }
        
        let url = Settings.apiUrl + `/tags/search?${params.toString()}`
        let r = await fetch(url, {"cache":"default"});
        if (r.ok) {
            let tags = await r.json()
            return tags;
        } else {
            return [];
        }
    }
}
