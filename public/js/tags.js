const ENDPOINT = "http://192.168.0.82:57255";


async function update_tags_cache() {
    let r = await fetch(`${ENDPOINT}/tag/all}`)
    let json = await r.json()
    let jsonString = JSON.stringify(json)
    sessionStorage.setItem('tags', jsonString);
}


async function all() {
    if (sessionStorage.getItem('tags') === null)
        await update_tags_cache()
    
    tags_json = sessionStorage.getItem('tags');
    return JSON.parse(tags_json);
}

export { all };