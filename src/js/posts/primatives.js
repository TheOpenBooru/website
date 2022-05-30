import Settings from "../settings";


async function status() {
    return fetch(`${Settings.API_URL}/status`)
        .then(() => true)
        .catch(() => false);
}

async function create(file) {
    let form = new FormData();
    form.append("image_file", file);

    let request = new XMLHttpRequest();
    request.open("POST", `${Settings.API_URL}/posts/create`);
    request.send(form);
}

async function get(id) {
    let r = await fetch(`${Settings.API_URL}/posts/post/${id}`);
    let json = await r.json();
    return json;
}

async function search(query) {
    let params = new URLSearchParams();
    params.set("limit", query.limit);
    params.set("index", query.index);
    let r = await fetch(`${Settings.API_URL}/posts/search?${params.toString()}`, {
        cache: "default",
    });
    if (r.ok) {
        return await r.json();
    } else {
        return [];
    }
}

async function update(post) {
    let request = new XMLHttpRequest();
    request.open("PATCH", `${Settings.API_URL}/posts/post/${post.id}`, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(post);
}

export { status, create, get, search, update};
