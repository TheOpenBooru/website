export default class Redirects {
    static redirectCallback(url) {
        return () => {
            window.location.href = url;
        };
    }

    static goto(url) {
        window.location.href = url;
    }

    static home() {
        return "/posts";
    }

    static auth() {
        return "/auth";
    }
    static profile() {
        return "/profile";
    }

    static post(id) {
        return `/post/${id}`;
    }

    static postSearch(layout = null) {
        let url = "/posts";
        if (layout) url += `/${layout}`;
        return url;
    }
}
