import { Account } from "js/booru";
import Settings from "js/settings";


export async function permissions(): Promise<object> {
    let url = Settings.apiUrl + "/account/permissions";
    let headers = {};
    if (Account.Store.token) {
        headers["Authorization"] = "Bearer " + Account.Store.token
    }
    let r = await fetch(url, { headers });
    if (r.status === 200) {
        let data: object = await r.json();
        return data
    } else if (r.status == 401) {
        Account.logout()
        throw new Error("Bad Login")
    } else {
        throw new Error("Interal Server Error")
    }
}
