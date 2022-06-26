import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Core from "containers/core";
import ColumnPosts from "components/ColumnPosts";
import GridPosts from "components/GridPosts";
import FullscreenPosts from "components/FullscreenPosts";
import { PostSearch, PostQuery } from "js/booru";
import Overlay from "./overlay";
import "./search.css";

function getQuery() {
    let savedQueryJSON = window.sessionStorage.getItem("posts-search");
    if (savedQueryJSON) {
        return JSON.parse(savedQueryJSON);
    } else {
        return new PostQuery();
    }
}

export default function Posts(props) {
    let { layout } = useParams();
    let [ search, setSearch ] = useState(new PostSearch(getQuery()));
    let [ posts, setPosts ] = useState([]);

    function setQuery(query) {
        window.sessionStorage.setItem("posts-search", JSON.stringify(query));
        setSearch(new PostSearch(query));
    }

    useEffect(() => (async () => prepend_posts())(), [search]); // eslint-disable-line

    async function prepend_posts() {
        await search.extend(100);
        setPosts(search.posts);
    }
    
    let LayoutLookup = {
        fullscreen: FullscreenPosts,
        grid: GridPosts,
        column: ColumnPosts,
    };
    
    let PostsLayout = LayoutLookup[layout] ?? ColumnPosts;

    return (
        <Core title={`Open Booru: ${layout ? layout : "Post"} Search`}>
            <Overlay query={ search.query} setQuery={setQuery} />
            {search.finished && posts.length === 0
                ? <span className="posts-ErrorText">No Posts Found</span>
                : <PostsLayout posts={posts} morePostsCallback={prepend_posts} />
            }
        </Core>
    );
}
