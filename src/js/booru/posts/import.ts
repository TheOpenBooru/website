import Settings from "js/settings";
import { Errors } from "js/booru";
import Account from "js/booru/account";

export default async function Import(import_url, captcha_response = null) {
    return new Promise((resolve, reject) => {
        let url = Settings.apiUrl + "/posts/import";
        if (captcha_response) url += "?h-captcha-response=" + captcha_response;

        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Authorization", "Bearer " + Account.Store.token);
        xhr.onload = () => {
            if (xhr.status === 200) {
                let data = JSON.parse(xhr.response)
                resolve(data);
            } else {
                if (xhr.status === 400) {
                    reject(new Error(xhr.status.toString()));
                } else if (xhr.status === 401) {
                    reject(Errors.PermisionError);
                } else if (xhr.status === 409) {
                    reject(Errors.PostAlreadyExists);
                } else if (xhr.status === 422) {
                    reject(Errors.ValidationError);
                }
            }
        };
        xhr.send(import_url);
    });
}
