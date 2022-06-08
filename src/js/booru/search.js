import { PostQuery } from "./query"
import { search } from "./primatives.js"


let defaultQuery = new PostQuery();
class PostSearch {
    index = 0;
    posts = [];
    finished = false;
    __lock = false;
    query = new PostQuery();

    constructor(query = defaultQuery) {
        this.query = query;
        this.posts = [];
    }

    async extend(count = null) {
        if (this.__lock) return;
        if (this.finished) return;
        this.__lock = true;

        let new_query = this.query;
        new_query.limit = count;
        
        let posts = await search(this.query);
        this.posts = this.posts.concat(posts);
        this.query.index += posts.length;
        
        if (posts.length < count) {
            this.finished = true;
        }
        this.__lock = false;
    }
}

export { PostSearch };