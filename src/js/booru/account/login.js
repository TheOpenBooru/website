import Settings from "js/settings";
import Profile from "./profile";
import Store from "./store";
import Errors from "./errors";

export default async function login(username, password) {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", Settings.apiUrl + "/account/login");
        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xhr.send(`username=${username}&password=${password}`);
        xhr.onload = async () => {
            if (xhr.status !== 200) {
                let err = generateError(xhr.status);
                reject(err);
            } else {
                let json = JSON.parse(xhr.response);
                Store.token = json["access_token"];
                
                let profile = await Profile();
                Store.username = profile["username"];
                Store.level = profile["level"];
                resolve();
            }
        };
    });
}

function generateError(status) {
    if (status === 401) return Errors.LoginFailure;
    if (status === 406) return Errors.PasswordReset;
    if (status === 422) return Errors.WrongAPIVersion;
    if (status === 429) return Errors.RateLimited;
}
