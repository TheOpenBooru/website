import { Types, Posts } from "js/booru";
import { useState } from "react";

const DefaultQuery = new Types.PostQuery();


export default function useSearch(query = DefaultQuery) {
    let [_query, setQuery] = useState(query);
    let [posts, setPosts] = useState([]);
    let [finished, setFinished] = useState(false);
    let [lock, setLock] = useState(false);


    async function extend(count = 100) {
        if (lock || finished) return;
        setLock(true);
        
        let newPosts = await Posts.search(query, posts.length, count);

        if (newPosts.length < count) setFinished(true);
        setPosts(posts.concat(newPosts));
        
        setLock(false);
    }

    function updateQuery(query) {
        setQuery(query)
        setPosts([]);
        setFinished(false);
    }

    return { query: _query, posts, finished, loading:lock, extend, updateQuery };
}
