var ENDPOINT = "http://slate:57255";

async function getPost(id) {
    let r = await fetch(`${ENDPOINT}/posts/post/${id}`)
    let json = await r.json()
    return json;
}

async function getPosts(query) {
    query = query || ""
    let r = await fetch(`${ENDPOINT}/posts/search?query=${query}`)
    let json = await r.json();
    return json;
}

async function updatePost(post) {
    let request = new XMLHttpRequest();
    request.open("PATCH", `${ENDPOINT}/posts/post/${post.id}`, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.send(post);
}

async function createPost(file) {
    let form = new FormData();
    form.append("image_file", file);
    
    let request = new XMLHttpRequest();
    request.open("POST", "http://localhost:57255/posts/create");
    request.send(form);
}

export { getPosts,getPost,createPost,updatePost };
