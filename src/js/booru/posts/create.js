import Settings from "js/settings";
import Account from "js/booru/account";


export const PermissionError = new Error("You don't have the Permissions to do this")


export async function create(file) {
    let formData = new FormData();
    formData.append("image", file);
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", Settings.apiUrl + "/posts/create");
        xhr.setRequestHeader("Authorization", "Bearer " + Account.token);
        xhr.onload = () => {
            if (xhr.status === 201) {
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