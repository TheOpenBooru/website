var ENDPOINT = "http://51.89.165.106:57255";

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
    let r = await fetch(`${ENDPOINT}/posts/post/${id}`)
    let json = await r.json()
    return json;
}

async function search(query) {
    query = query || ""
    let r = await fetch(`${ENDPOINT}/posts/search?query=${query}`)
    let json = await r.json();
    return json;
}

async function update(post) {
    let request = new XMLHttpRequest();
    request.open("PATCH", `${ENDPOINT}/posts/post/${post.id}`, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(post);
}

export { status, create, get, search, update };