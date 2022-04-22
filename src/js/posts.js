var ENDPOINT = "http://192.168.0.82:8443";

async function status() {
    return fetch(`${ENDPOINT}/status`)
        .then(() => true)
        .catch(() => false);
}

async function create(file) {
    let form = new FormData();
    form.append("image_file", file);

    let request = new XMLHttpRequest();
    request.open("POST", `${ENDPOINT}/posts/create`);
    request.send(form);
}

async function get(id) {
    let r = await fetch(`${ENDPOINT}/posts/post/${id}`);
    let json = await r.json();
    return json;
}

class PostQuery {
    limit = 64;
    index = 0;
    include_tags = [];
    exlude_tags = [];
}

async function search(query) {
    let params = new URLSearchParams();
    params.set("limit", query.limit);
    params.set("index", query.index);
    let r = await fetch(`${ENDPOINT}/posts/search?${params.toString()}`, {
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
    request.open("PATCH", `${ENDPOINT}/posts/post/${post.id}`, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(post);
}

export { status, create, get, search, update, PostQuery };