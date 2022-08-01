import Settings from "js/settings";
import { Account } from "js/booru"

export default function Delete(post_id){
    return new Promise((resolve, reject) => {
        if (Account.level !== "admin") {
            throw Account.Errors.InsufficentPermissions;
        }
        let xhr = new XMLHttpRequest();
        xhr.open("DELETE", Settings.apiUrl + "/post/" + post_id.toString());
        xhr.setRequestHeader("Authorization", "Bearer " + Account.token);
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve();
            } else {
                if (xhr.status === 401) {
                    throw Account.Errors.InsufficentPermissions;
                } else {
                    reject(new Error("Generic Error"));
                }
            }
        };
        xhr.send();
    });
}