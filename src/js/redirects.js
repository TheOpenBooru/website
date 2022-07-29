import Settings from "./settings";

const Redirects = {
    callback: (url) => () => window.location.href = url,
    goto: (url) => window.location.href = url,

    home:() => "/",
    post:(id) => `/post/${id}`,

    auth:"/auth",
    login:"/auth/login",
    register:"/auth/register",
    profile:"/profile",
    settings:"/settings",
    
    search: ({ layout = null, query = null }) => {
        let baseUrl = "/posts";
        if (layout) baseUrl += "/" + layout
        if (query) baseUrl += "?query=" + query
        return baseUrl
    },
}

export default Redirects;