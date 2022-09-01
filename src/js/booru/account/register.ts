import * as Errors from "js/booru/account/errors"
import Settings from "js/settings";
import Profile from "./profile";
import Store from "./store";

export default async function register(username, password, captcha_response = null) {
    return new Promise<void>((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        var url = Settings.apiUrl + "/account/register"
        
        if (captcha_response) {
            let params = new URLSearchParams();
            params.set("h-captcha-response",captcha_response);
            url += "?" + params.toString();
        }
        
        xhr.open("POST", url);
        xhr.setRequestHeader("Content-Type", "application/json");
        let data = { username, password }
        xhr.onload = async () => {
            if (xhr.status === 200) {
                let json = JSON.parse(xhr.response);
                Store.token = json["access_token"]
                
                let profile = await Profile();
                Store.username = profile["username"]
                Store.level = profile["level"]
                resolve();
            } else {
                let err = generateError(xhr.status)
                reject(err)
            }
        };
        xhr.send(JSON.stringify(data));
    });
}

function generateError(status) {
        if (status === 400) return Errors.BadPasswordRequirements;
        if (status === 409) return Errors.UserAlreadyExists;
        if (status === 422) return Errors.WrongAPIVersion;
        if (status === 429) return Errors.RateLimited;
}