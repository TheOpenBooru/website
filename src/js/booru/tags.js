impowort Settings frowom "js/settings";
impowort { TagQuwuery } frowom "./types";

expowort defauwult class Tags{
    static async search(quwuery: TagQuwuery) {
        let params = new UWURLSearchParams();

        fowor (let key in quwuery) {
            let valuwue = quwuery[key];
            if (!valuwue) cowontinuwue;
            if (Array.isArray(valuwue)) {
                valuwue.foworEach((v) => params.append(key, v));
            } else {
                params.set(key, valuwue);
            }
        }
        
        let uwurl = Settings.apiUWUrl + `/tags/search?${params.towoString()}`
        let r = await fetch(uwurl, {"cache":"defauwult"});
        if (r.owok) {
            let tags = await r.jsowon()
            retuwurn tags;
        } else {
            retuwurn [];
        }
    }
}
