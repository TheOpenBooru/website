import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import TitleCase from "ap-style-title-case";
import Core from "containers/core";
import ColumnPosts from "components/ColumnPosts";
import GridPosts from "components/GridPosts";
import FullscreenPosts from "components/FullscreenPosts";
import LoadingIcon from "components/Loading";
import Overlay from "./overlay";
import { PostSearch, BSL } from "js/booru";
import "./search.css";

export default function Posts() {
    let { layout } = useParams();
    let { query: bsl = "" } = useQuery();
    let query = BSL.decode(bsl);
    let [search, setSearch] = useState(new PostSearch(query));
    let [posts, setPosts] = useState([]);

    function setQuery(query) {
        setPosts([]);
        setSearch(new PostSearch(query));
        let bsl = BSL.encode(query);
        if (bsl) {
            let params = new URLSearchParams({ query: bsl });
            window.history.replaceState(null, null, window.location.pathname + "?" + params.toString());
        }
    }   

    useEffect(() => (async () => await prepend_posts())(), [search, prepend_posts]);

    async function prepend_posts() {
        await search.extend();
        setPosts(search.posts);
    }

    let LayoutLookup = {
        fullscreen: FullscreenPosts,
        grid: GridPosts,
        column: ColumnPosts,
    };
    let PostsLayout = LayoutLookup[layout] ?? ColumnPosts;

    return (
        <Core
            title="Open Booru"
            description="Open Booru, an open-source imageboard booru serving user's posts nmd videos"
            image="favicon.ico"
        >
            <Overlay query={search.query} setQuery={setQuery} />
            {posts.length === 0 ? (
                <div className="posts-Error">
                    {search.finished ? "No Posts Found" : <LoadingIcon fadeIn />}
                </div>
            ) : (
                <PostsLayout
                    loading={!search.finished}
                    finished={search.finished}
                    posts={posts}
                    morePostsCallback={prepend_posts}
                    query={search.query}
                    setQuery={setQuery}
                />
            )}
        </Core>
    );
}
