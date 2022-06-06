class Settings {
    static get fullscreenButtonPreviews() {
        return get_setting("fullscreenButtonPreviews", false);
    }
    static set fullscreenButtonPreviews(value) {
        set_setting("fullscreenButtonPreviews", value);
    }
    static set searchLayout(value) {
        set_setting("view_mode", value);
    }
    static get searchLayout() {
        return get_setting("view_mode", "grid");
    }
    static get apiUrl() {
        return get_setting("api_url", "https://api.openbooru.org");
    }
}

function set_setting(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}
function get_setting(key, default_value) {
    let value = localStorage.getItem(key);
    if (value) {
        try {
            return JSON.parse(value);
        } catch {
            return value;
        }
    } else {
        localStorage.setItem(key, default_value);
        return default_value;
    }
}
export default Settings;
