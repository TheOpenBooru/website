export default class Redirects {
    static callback(url) {
        return () => {
            window.location.href = url;
        };
    }

    static goto(url) {
        window.location.href = url;
    }

    static home = () => "/"
    static post = (id) =>`/post/${id}`

    static auth ="/auth";
    static profile = "/profile";
    static settings = "/settings";

    static search = (layout = "") => "/posts/" + layout 
}
