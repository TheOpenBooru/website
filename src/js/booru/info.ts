import Settings from "js/settings"
import { Data } from "dataclass";

class Status extends Data {
    version: String
    default_sort: String
    search_limit: BigInt
    sitename: String
    captcha_sitekey: String
}

export default async function load() {
    let r = await fetch(Settings.apiUrl + "/status")
    let data = await r.json();
    return Status.create(data);
}