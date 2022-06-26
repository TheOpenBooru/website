import Settings from "js/settings.js";


const LoginFailure = new Error("Failed to Login")
const PasswordReset = new Error("Password Was Reset")
const WrongAPIVersion = new Error("The API is the wrong version")
const RateLimited = new Error("Your being rate-limited, please wait")


export default class Account {
    LoginFailure = LoginFailure
    PasswordReset = PasswordReset

    static get username(): String {
        return window.localStorage.getItem("LoginUsername");
    }
    static set username(value) {
        window.localStorage.setItem("LoginUsername", value);
    }

    static get token(): String {
        return window.localStorage.getItem("LoginToken");
    }
    static set token(value) {
        window.localStorage.setItem("LoginToken", value);
    }
    static get loggedIn(): Boolean {
        return Boolean(this.token);
    }
    static async logout() {
        window.localStorage.removeItem("LoginToken");
        window.localStorage.removeItem("LoginProfile");
    }


    static async login(username, password) {
        if (username === "" || password === "") {
            throw new Error("Username or Password is empty");
        }
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", Settings.apiUrl + "/account/login");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onload = async () => {
                if (xhr.status === 200) {
                    let json = JSON.parse(xhr.response);
                    this.token = json["access_token"];
                    let profile = await this.profile();
                    this.username = profile["username"];
                    resolve();
                } else {
                    let err;
                    if (xhr.status === 401) {
                        err = LoginFailure;
                    } else if (xhr.status === 406) {
                        err = PasswordReset
                    } else if (xhr.status === 422) {
                        err = WrongAPIVersion;
                    } else if (xhr.status === 429) {
                        err = RateLimited;
                    } else {
                        err = new Error(xhr.response);
                    }
                    throw (err)
                }
            };
            xhr.send(`username=${username}&password=${password}`);
        });
    }


    static async register(username, password) {
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", Settings.apiUrl + "/account/register");
            xhr.setRequestHeader("Content-Type", "application/json");
            xhr.onload = () => {
                if (xhr.status === 200) {
                    resolve(true);
                } else {
                    let error = new Error(xhr.response);
                    reject(error);
                }
            };
            let json = JSON.stringify({ username, password });
            xhr.send(json);
        });
    }

    
    static async profile() {
        let url = Settings.apiUrl + "/profile";
        let r = await fetch(url, {
            cache: "default",
            headers: {
                Authorization: "Bearer " + this.token,
            },
        });
        let profile = await r.json();
        return profile;
    }
}
