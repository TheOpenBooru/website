import { PostQuery } from "./types"
import { search } from "./primatives.js"

class PostSearch {
    index = 0;
    query = new PostQuery();
    posts = [];

    constructor(query) {
        this.query = query;
        this.posts = [];
    }
    
    async extend(count = 100) {
        let posts = await search(this.query)
        this.posts = this.posts.concat(posts)
        this.query.index += posts.length;
    }
}

export { PostSearch };