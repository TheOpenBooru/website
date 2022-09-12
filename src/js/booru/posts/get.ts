import Settings from "js/settings";
import { Account } from "js/booru";
import { Post } from "openbooru/lib/types";

export default async function get(id): Promise<Post> {
    let url = `${Settings.apiUrl}/post/${id}`;
    let headers = {}
    if (Account.Store.token) {
        headers["Authorization"] = "Bearer " + Account.Store.token
    }
    let r = await fetch(url, {headers});
    if (r.status === 404) {
        throw new Error("Post Not Found");
    } else {
        let json = await r.json();
        return json;
    }
}