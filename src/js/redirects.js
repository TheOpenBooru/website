const home = () => `/posts`
const post = (id) => `/post/${id}`;
const post_search = (query = null) => {
    let url = '/posts';
    url += query ? `?query=${query}` : '';
    return url;
}

export default {home,post,post_search}