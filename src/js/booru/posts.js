import Settings from "js/settings";
import Account from "./account"
import { PostQuery } from "./types"


let PermissionError = new Error("You don't have the Permissions to do this")


export default class Posts{
    static PermissionError = PermissionError


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

    static async create(file: File) {
        let formData = new FormData();
        formData.append("image", file);
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", Settings.apiUrl + "/posts/create");
            xhr.setRequestHeader("Authorization", "Bearer " + Account.token);
            xhr.onload = () => {
                if (xhr.status === 201) {
                    let json = JSON.parse(xhr.response);
                    resolve(json)
                } else {
                    if (xhr.status === 401) {
                        reject(this.PermissionError)
                    } else {
                        reject(new Error("Generic Error"))
                    }
                }
            }
            xhr.send(formData);
        });
    }

    static async search(query: PostQuery, index=0, count=64) {
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
        params.set("index", index)
        params.set("count", count)

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
