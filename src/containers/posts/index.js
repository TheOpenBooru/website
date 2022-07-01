import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Core from "containers/core";
import ColumnPosts from "components/ColumnPosts";
import GridPosts from "components/GridPosts";
import FullscreenPosts from "components/FullscreenPosts";
import { PostSearch, PostQuery } from "js/booru";
import Overlay from "./overlay";
import "./search.css";
import "./loading.css";

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
        setPosts([]);
        window.sessionStorage.setItem("posts-search", JSON.stringify(query));
        setSearch(new PostSearch(query));
    }

    useEffect(() => (async () => await prepend_posts())(), [search]);


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
            {posts.length === 0
                ? <div className="posts-ErrorText">
                    {search.finished
                        ? "No Posts Found"
                        : <div className="lds-facebook"><div></div><div></div><div></div></div>
                    }
                </div>
                : <PostsLayout posts={posts} morePostsCallback={prepend_posts} />
            }
        </Core>
    );
}
