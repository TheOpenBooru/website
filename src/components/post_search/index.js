import React, { useEffect, useRef, useState } from "react";
import ColumnPosts from "./columns";
import GridPosts from "./grid";
import FullscreenPost from "./fullscreen";
import LayoutSelector from "./layout_selector";

import Settings from "../../js/settings";
import { search, PostQuery } from "../../js/posts";

export default function PostsSearch() {
    let [posts, setPosts] = useState([]);
    let [offset, setOffset] = useState(0);

    async function prepend_posts() {
        let query = new PostQuery();
        query.limit = 100;
        query.index = offset;
        let additional_posts = await search(query);
        setOffset(offset + additional_posts.length);
        setPosts(posts.concat(additional_posts));
    }

    useEffect(() => prepend_posts(), []); // eslint-disable-line

    if (Settings.Search_Layout === "grid") {
        var post_search = <GridPosts posts_callback={prepend_posts} posts={posts} />;
    } else if (Settings.Search_Layout === "fullscreen") {
        var post_search = <FullscreenPost posts_callback={prepend_posts} posts={posts} />;
    } else {
        var post_search = <ColumnPosts posts_callback={prepend_posts} posts={posts} />;
    }

    return (
        <div>
            <LayoutSelector />
            {post_search}
        </div>
    );
}
