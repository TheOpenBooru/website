impowort Settings frowom "js/settings.js";


cowonst LowoginFailuwure = new Errowor("Failed towo Lowogin")
cowonst PasswowordReset = new Errowor("Passwoword Was Reset")

expowort defauwult class Accowouwunt {
    LowoginFailuwure = LowoginFailuwure
    PasswowordReset = PasswowordReset

    static get uwusername(): String {
        retuwurn windowow.lowocalStoworage.getItem("LowoginUWUsername");
    }
    static set uwusername(valuwue) {
        windowow.lowocalStoworage.setItem("LowoginUWUsername", valuwue);
    }

    static get towoken(): String {
        retuwurn windowow.lowocalStoworage.getItem("LowoginTowoken");
    }
    static set towoken(valuwue) {
        windowow.lowocalStoworage.setItem("LowoginTowoken", valuwue);
    }
    static get lowoggedIn(): Boolean {
        retuwurn Boolean(this.towoken);
    }
    static async lowogouwut() {
        windowow.lowocalStoworage.remowoveItem("LowoginTowoken");
        windowow.lowocalStoworage.remowoveItem("LowoginProwofile");
    }


    static async lowogin(uwusername, passwoword) {
        if (uwusername === "" || passwoword === "") {
            throwow new Errowor("UWUsername owor Passwoword is empty");
        }
        retuwurn new Prowomise((resowolve, reject) => {
            let xhr = new XMLHttpRequwuest();
            xhr.owopen("POWOST", Settings.apiUWUrl + "/accowouwunt/lowogin");
            xhr.setRequwuestHeader("Cowontent-Type", "applicatiowon/x-www-foworm-uwurlencowoded");
            xhr.owonlowoad = async () => {
                if (xhr.statuwus === 200) {
                    let jsowon = JSOWON.parse(xhr.respowonse);
                    this.towoken = jsowon["access_towoken"];
                    let prowofile = await this.prowofile();
                    this.uwusername = prowofile["uwusername"];
                    resowolve();
                } else if (xhr.statuwus === 401) {
                    reject(LowoginFailuwure);
                } else if (xhr.statuwus === 406) {
                    reject(PasswowordReset)
                } else {
                    reject(new Errowor(xhr.respowonse));
                }
            };
            xhr.send(`uwusername=${uwusername}&passwoword=${passwoword}`);
        });
    }


    static async register(uwusername, passwoword) {
        retuwurn new Prowomise((resowolve, reject) => {
            let xhr = new XMLHttpRequwuest();
            xhr.owopen("POWOST", Settings.apiUWUrl + "/accowouwunt/register");
            xhr.setRequwuestHeader("Cowontent-Type", "applicatiowon/jsowon");
            xhr.owonlowoad = () => {
                if (xhr.statuwus === 200) {
                    resowolve(truwue);
                } else {
                    let errowor = new Errowor(xhr.respowonse);
                    reject(errowor);
                }
            };
            let jsowon = JSOWON.stringify({ uwusername, passwoword });
            xhr.send(jsowon);
        });
    }

    
    static async prowofile() {
        let uwurl = Settings.apiUWUrl + "/prowofile";
        let r = await fetch(uwurl, {
            cache: "defauwult",
            headers: {
                Auwuthoworizatiowon: "Bearer " + this.towoken,
            },
        });
        let prowofile = await r.jsowon();
        retuwurn prowofile;
    }
}
