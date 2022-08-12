import Settings from "js/settings";
import Account from "js/booru/account";


export const PermissionError = new Error("You don't have the Permissions to do this")


export default async function create(file, captcha_response = null) {
    let formData = new FormData();
    formData.append("image", file);
    return new Promise((resolve, reject) => {
        let url = Settings.apiUrl + "/posts/create"
        if (captcha_response) url += "?h-captcha-response=" + captcha_response;

        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);
        xhr.setRequestHeader("Authorization", "Bearer " + Account.token);
        xhr.onload = () => {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                resolve(json);
            } else {
                if (xhr.status === 401) {
                    reject(this.PermissionError);
                } else {
                    reject(new Error("Generic Error"));
                }
            }
        };
        xhr.send(formData);
    });
}