import { Account } from "js/booru";
import Settings from "js/settings";

export default async function hasPermission(permission): Promise<boolean>{
    let url = Settings.apiUrl + "/account/permissions";
    let r = await fetch(url, {
        headers: {"Authorization": "Bearer " + Account.Store.token}
    });
    if (r.status === 200) {
        let data: object = await r.json();
        if (!(permission in data)) {
            throw new Error("Missing Permission")
        } else {
            return data[permission]["has_permission"]
        }
    } else {
        Account.logout();
    }
}
