import Settings from "js/settings";
import Profile from "js/booru/account/profile";
import Errors from "js/booru/account/errors";

export default async function login(username, password): Promise<void> {
    return new Promise<void>((resolve, reject) => {
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
                
                let profile = await Profile();
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
