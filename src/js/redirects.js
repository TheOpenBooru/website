export default class Redirects {
    static callback(url) {
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

    static auth ="/auth";
    static profile = "/profile";

    static post(id) {
        return `/post/${id}`;
    }

    static search(layout = null) {
        let url = "/posts";
        if (layout) url += `/${layout}`;
        return url;
    }
}
