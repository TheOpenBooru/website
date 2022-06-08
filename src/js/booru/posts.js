import Settings from "js/settings";
import { PostQuery } from "./types"

export default class Posts{
    static async create(file) {
        let form = new FormData();
        form.append("image_file", file);
    
        let request = new XMLHttpRequest();
        request.open("POST", `${Settings.apiUrl}/posts/create`);
        request.send(form);
    }


    static async get(id) {
        let url = `${Settings.apiUrl}/posts/post/${id}`
        let r = await fetch(url, {"cache":"default"});
        if (r.status === 404) {
            throw new Error("Post Not Found");
        } else {
            let json = await r.json();
            return json;
        }
    }


    static async search(query: PostQuery) {
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
        params.set("descending", query.descending)

        let url = Settings.apiUrl + `/posts/search?${params.toString()}`
        let r = await fetch(url, {"cache":"default"});
        if (r.ok) {
            return await r.json();
        } else {
            return [];
        }
    }

    
    static async update(post) {
        let request = new XMLHttpRequest();
        request.open("PATCH", `${Settings.apiUrl}/posts/post/${post.id}`, true);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(post);
    }
}
