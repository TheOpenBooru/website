import { Account, Types } from "js/booru";
import Settings from "js/settings";

export default async function profile(cache = true){
    let url = Settings.apiUrl + "/profile";
    let r = await fetch(url, {
        headers: {"Authorization": "Bearer " + Account.Store.token}
    });
    if (r.status === 200) {
        let data = await r.json();
        let profile = new Types.Profile();
        profile = Object.assign(profile, data)
        return profile;
    } else {
        Account.logout();
    }
}
