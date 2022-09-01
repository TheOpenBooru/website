import Settings from "js/settings";
import { Account, Errors } from "js/booru"

export default function Delete(post_id){
    return new Promise<void>((resolve, reject) => {
        if (Account.Store.level !== "admin") {
            throw Errors.PermisionError;
        }
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", Settings.apiUrl + "/post/" + post_id.toString());
        xhr.setRequestHeader("Authorization", "Bearer " + Account.Store.token);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve();
            } else {
                if (xhr.status === 401) {
                    throw Errors.PermisionError;
                } else {
                    reject(new Error("Generic Error"));
                }
            }
        };
        xhr.send();
    });
}