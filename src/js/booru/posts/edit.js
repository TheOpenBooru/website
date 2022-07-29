import Settings from "js/settings";
import {Account} from "..";

export default async function edit(post_id, edit, captcha_response = null) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        let url = Settings.apiUrl + "/post/" + post_id;
        if (captcha_response) url += "?h-captcha-response=" + captcha_response;
        xhr.open("PATCH", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("Authorization", "Bearer " + Account.token);
        xhr.send(JSON.stringify(edit));
        xhr.onload = () => {
            if (xhr.status === 202) {
                resolve();
            } else {
                reject();
            }
        }
    });
}