import { PostQuery } from "./types"
import { search } from "./primatives.js"

class PostSearch {
    index = 0;
    query = new PostQuery();
    posts = [];
    finished = false;

    constructor(query) {
        this.query = query;
        this.posts = [];
    }

    async extend(count = 100) {
        if (this.finished) {
            return;
        }
        let new_query = this.query;
        new_query.limit = count;

        let posts = await search(this.query);
        this.posts = this.posts.concat(posts);
        this.query.index += posts.length;
        
        if (posts.length < count) {
            this.finished = true;
        }
    }
}

export { PostSearch };