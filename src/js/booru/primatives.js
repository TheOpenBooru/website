import Settings from "../settings";

async function status() {
    return fetch(`${Settings.apiUrl}/status`)
        .then(() => true)
        .catch(() => false);
}

async function create(file) {
    let form = new FormData();
    form.append("image_file", file);

    let request = new XMLHttpRequest();
    request.open("POST", `${Settings.apiUrl}/posts/create`);
    request.send(form);
}

async function get(id) {
    let r = await fetch(`${Settings.apiUrl}/posts/post/${id}`);
    if (r.status === 404) {
        throw new Error("Post Not Found");
    } else {
        let json = await r.json();
        return json;
    }
}

async function search(query) {
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
    let r = await fetch(Settings.apiUrl + `/posts/search?${params.toString()}`);
    if (r.ok) {
        return await r.json();
    } else {
        return [];
    }
}

async function update(post) {
    let request = new XMLHttpRequest();
    request.open("PATCH", `${Settings.apiUrl}/posts/post/${post.id}`, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(post);
}

export { status, create, get, search, update };
