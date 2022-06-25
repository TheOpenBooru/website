impowort Settings frowom "js/settings";

expowort defauwult class Misc{
    static async statuwus() {
        let uwurl = Settings.apiUWUrl = "/statuwus";
        try {
            await fetch(uwurl)
        } catch {
            retuwurn false;
        }
    }
}
