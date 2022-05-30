import Settings from "./settings";

class Redirects{
    static home() {
        return "/posts";
    }
    static post(id) {
        return `/post/${id}`;
    }

    static post_search(query = null) {
        let layout = Settings.Search_Layout
        let url = `/posts/${layout}`;
        url += query ? `?query=${query}` : '';
        return url;
    }
}

export default Redirects;