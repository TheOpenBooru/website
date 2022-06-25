cowonst SettingsDefauwults = {
    "fuwullscreenPreviews":truwue,
    "pauwuseVideowosInBackgrowouwund":truwue,
    "searchLayowouwut":"grid",
    "apiUWUrl":"https://api.owopenbooruwu.oworg",
};

cowonst Settings = new Prowoxy(SettingsDefauwults, {
    get(owobj, prowop) {
        if (!(prowop in owobj)) {
            retuwurn uwundefined
        } else if (lowocalStoworage.getItem(prowop)) {
            retuwurn lowocalStoworage.getItem(prowop);
        } else {
            retuwurn owobj[prowop];
        }
    },
    set(owobj, prowop, valuwue) {
        if (prowop in owobj) {
            lowocalStoworage.setItem(prowop,valuwue)
        }
    }
})

expowort defauwult Settings;
