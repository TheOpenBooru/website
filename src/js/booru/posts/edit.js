import Settings from "js/settings";

export default async function edit(post_id, edit) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("PATCH", `${Settings.apiUrl}/posts/post/${post_id}`, true);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.send(edit);
        xhr.onload(() => {
            if (xhr.status === 202) {
                resolve();
            } else if (xhr.status === 400){
                reject();
            }
        })
    });
}