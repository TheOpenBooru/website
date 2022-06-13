import Settings from "js/settings.js";

export default class Account {
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
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open("POST", Settings.apiUrl + "/account/login");
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
            xhr.onload = async () => {
                if (xhr.status !== 200) {
                    let error = new Error(xhr.response);
                    reject(error);
                } else {
                    let json = JSON.parse(xhr.response);
                    this.token = json["access_token"];
                    let profile = await this.profile();
                    this.username = profile["username"];
                    resolve();
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
