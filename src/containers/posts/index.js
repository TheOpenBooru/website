import React, { useState,useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import SearchBox from "components/SearchBox";
import ColumnPosts from "components/ColumnPosts";
import GridPosts from "components/GridPosts";
import MessageBox from "components/MessageBox";
import Core from "containers/core";
import FullscreenPosts from "components/FullscreenPosts";
import { PostSearch, PostQuery } from "js/booru";
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
    let searchRef = useRef();
    let [ search, setSearch ] = useState(new PostSearch(getQuery()));
    let [ posts, setPosts ] = useState([]);
    
    function setQuery(query) {
        window.sessionStorage.setItem("posts-search", JSON.stringify(query));
        toggleSearchBox();
        setSearch(new PostSearch(query));
    }
    
    useEffect(() => (async () => prepend_posts())(), [search]); // eslint-disable-line
    
    async function prepend_posts() {
        await search.extend(100);
        setPosts(search.posts);
    }
    
    function toggleSearchBox() {
        if (searchRef.current) {
            if (searchRef.current.style.display === "none") {
                searchRef.current.style.display = "block";
            } else {
                searchRef.current.style.display = "none";
            }
        }
    }
    
    let LayoutLookup = {
        "fullscreen": FullscreenPosts,
        "grid": GridPosts,
        "column": ColumnPosts,
    }
    let PostsLayout = LayoutLookup[layout] ?? ColumnPosts;

    return (
        <Core title={`Open Booru: ${layout ? layout : "Post"} Search`}>
            <div id="posts-searchBox" ref={searchRef} style={{ "display": "none" }}>
                <MessageBox>
                    <SearchBox query={search.query} setQuery={setQuery} />
                </MessageBox>
            </div>
            <div id="posts-overlayButtons">
                <div id="posts-searchButton" title="Search">
                    <img src="/images/search.svg" alt="Search" onClick={toggleSearchBox} />
                </div>
            </div>
            {
                search.finished && posts.length === 0 
                    ? <span className="posts-ErrorText">No Posts Found</span>
                    : <PostsLayout posts={posts} morePostsCallback={prepend_posts} />
            }
        </Core>
    );
}
