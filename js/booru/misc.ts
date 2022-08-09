import Settings from "js/settings";

export default class Misc{
    static async status() {
        let url = Settings.apiUrl = "/status";
        try {
            await fetch(url)
        } catch {
            return false;
        }
    }
}
