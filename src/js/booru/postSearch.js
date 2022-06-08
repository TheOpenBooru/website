import Posts from "./posts";
import { PostQuery } from "./types"

export class PostSearch {
    index = 0;
    finished = false;
    __lock = false;
    posts = [];
    query = new PostQuery();

    constructor(query = null) {
        if (query) {
            this.query = query;
        }
    }

    async extend(count = null) {
        if (this.__lock) return;
        if (this.finished) return;
        this.__lock = true;

        let new_query = this.query;
        new_query.limit = count;
        
        let posts = await Posts.search(this.query);
        this.posts = this.posts.concat(posts);
        this.query.index += posts.length;
        
        if (posts.length < count) {
            this.finished = true;
        }
        this.__lock = false;
    }
}
