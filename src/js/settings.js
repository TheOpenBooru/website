class Settings {
    static get Search_Layout() {
        return get_setting("view_mode", "grid");
    }
    static set Search_Layout(value) {
        localStorage.setItem("view_mode", value);
    }
    static get Volume() {
        return get_setting("volume", "1");
    }
    static set Volume(value) {
        localStorage.setItem("volume", value);
    }
    static get API_URL() {
        return get_setting("api_url", "https://api.openbooru.org");
    }
}

function get_setting(key, default_value) {
    let value = localStorage.getItem(key);
    if (value) {
        return value;
    } else {
        localStorage.setItem(key, default_value);
        return default_value;
    }
}

export default Settings;
