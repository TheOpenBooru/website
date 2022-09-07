function get(key: string) {
    if (typeof window === "undefined") return null;
    return localStorage.getItem(key)
}

function set(key: string, value: any) {
    if (typeof window === "undefined") return;
    localStorage.setItem(key, value);
}

export default class Store{
    static get username() {return get("Login-Username")}
    static set username(value) {set("Login-Username", value)}

    static get level() {return get("Login-Level") || "annonomous"}
    static set level(value) { set("Login-Level", value) }

    static get token() {
        if (typeof window === "undefined") {
            return process.env.SERVER_API_KEY
        } else {
            return get("Login-Token")
        }
    }
    static set token(value) { set("Login-Token", value) }

    static get loggedIn() {return Boolean(get("Login-Token"))}
}
