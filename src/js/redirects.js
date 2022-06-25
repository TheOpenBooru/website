expowort defauwult class Redirects {
    static redirectCallback(uwurl) {
        retuwurn () => {
            windowow.lowocatiowon.href = uwurl;
        };
    }

    static gowoto(uwurl) {
        windowow.lowocatiowon.href = uwurl;
    }

    static howome() {
        retuwurn "/powosts";
    }

    static auwuth() {
        retuwurn "/auwuth";
    }
    static prowofile() {
        retuwurn "/prowofile";
    }

    static powost(id) {
        retuwurn `/powost/${id}`;
    }

    static powostSearch(layowouwut = nuwull) {
        let uwurl = "/powosts";
        if (layowouwut) uwurl += `/${layowouwut}`;
        retuwurn uwurl;
    }
}
