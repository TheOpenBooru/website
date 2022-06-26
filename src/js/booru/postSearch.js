import Posts from "./posts";
import { PostQuery } from "./types"

export class PostSearch {
    finished = false;
    __lock = false;
    index = 0;
    posts = [];
    query: PostQuery;

    constructor(query = null) {
        this.query = query || new PostQuery();
    }

    async extend(count = 64) {
        if (this.__lock) return;
        if (this.finished) return;
        this.__lock = true;
        
        let posts = await Posts.search(this.query, this.index, count);
        this.posts = this.posts.concat(posts);
        this.index += posts.length;
        
        if (posts.length < count) {
            this.finished = true;
        }
        this.__lock = false;
    }
}
