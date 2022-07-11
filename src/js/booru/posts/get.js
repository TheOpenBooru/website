import Settings from "js/settings";

export default async function get(id) {
    let url = `${Settings.apiUrl}/posts/post/${id}`;
    let r = await fetch(url, { cache: "default" });
    if (r.status === 404) {
        throw new Error("Post Not Found");
    } else {
        let json = await r.json();
        return json;
    }
}