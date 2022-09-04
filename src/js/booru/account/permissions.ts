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
    } else {
        throw new Error("Interal Server Error")
    }
}
export async function hasPermission(permission): Promise<boolean>{
    let data = await permissions();
    if (!(permission in data)) {
        throw new Error("Missing Permission")
    } else {
        return data[permission]["has_permission"]
    }
}
