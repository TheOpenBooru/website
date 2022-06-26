const SettingsDefaults = {
    fullscreenPostPreviews: true,
    pauseVideosInBackground: true,
    searchLayout: "grid",
    PostsGridSize: 9,
    apiUrl: "https://api.openbooru.org",
};

const Settings = new Proxy(SettingsDefaults, {
    get(obj, prop) {
        if (!(prop in obj)) {
            return undefined;
        } else if (localStorage.getItem(prop)) {
            return localStorage.getItem(prop);
        } else {
            return obj[prop];
        }
    },
    set(obj, prop, value) {
        if (prop in obj) {
            localStorage.setItem(prop, value)
            return true;
        } else {
            return false;
        }

    }
})

export default Settings;
