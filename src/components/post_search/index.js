import React, { useState,useEffect,use } from "react";
import ColumnPosts from "./columns";
import GridPosts from "./grid";
import FullscreenPost from "./fullscreen";
import LayoutSelector from "./layout_selector";
import Settings from "js/settings";

export default function PostsSearch(props) {
    let { search, layout } = props;
    let [ posts, setPosts ] = useState([]);
    
    useEffect(() => {
        (async () => {
            await search.extend(100);
            setPosts(search.posts);
        })()
    }, []);
    
    function prepend_posts() {
        (async () => {
            await search.extend(100);
            setPosts(search.posts);
        })();
    }

    let Layout_Lookup = {
        "column" : ColumnPosts,
        "grid" : GridPosts,
        "fullscreen": FullscreenPost,
    }
    let PostsLayout = Layout_Lookup[layout] || GridPosts

    return (
        <div>
            <LayoutSelector current={layout} />
            <PostsLayout posts={posts} posts_callback={prepend_posts}/>
        </div>
    );
}
