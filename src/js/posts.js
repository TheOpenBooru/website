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

export { getPosts,getPost };
