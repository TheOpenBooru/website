import Settings from "./settings";

export default class Redirects {
    static redirectCallback(url) {
        return () => {
            window.location.href = url;
        };
    }

    static home() {
        return "/posts";
    }

    static post(id) {
        return `/post/${id}`;
    }

    static postSearch(layout = null, query = null) {
        layout = layout || Settings.searchLayout;
        let url = `/posts/${layout}`;
        url += query ? `?query=${query}` : "";
        return url;
    }
}
