import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import ColumnPosts from "components/ColumnPosts";
import GridPosts from "components/GridPosts";
import FullscreenPosts from "components/FullscreenPosts";
import SearchBox from "components/SearchBox";
import CreatePost from "components/CreatePost";
import MessageBox from "components/MessageBox";
import Core from "containers/core";
import { PostSearch, PostQuery } from "js/booru";
import ButtonOverlay from "./overlay";
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
    let searchRef = React.useRef(null);
    let createRef = React.useRef(null);
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
        "fullscreen": FullscreenPosts,
        "grid": GridPosts,
        "column": ColumnPosts,
    }
    let PostsLayout = LayoutLookup[layout] ?? ColumnPosts;

    function toggleSearchBox() {
        if (searchRef.current) {
            if (searchRef.current.style.display === "none") {
                searchRef.current.style.display = "block";
            } else {
                searchRef.current.style.display = "none";
            }
        }
    }

    function toggleCreateBox() {
        if (createRef.current) {
            if (createRef.current.style.display === "none") {
                createRef.current.style.display = "block";
            } else {
                createRef.current.style.display = "none";
            }
        }
    }

    return (
        <Core title={`Open Booru: ${layout ? layout : "Post"} Search`}>
            <div ref={searchRef} style={{ "display": "none" }}>
                <MessageBox>
                    <SearchBox query={search.query} setQuery={setQuery} />
                </MessageBox>
            </div>
            <div ref={createRef} style={{ "display": "none" }}>
                <MessageBox>
                    <CreatePost/>
                </MessageBox>
            </div>
            <ButtonOverlay toggleSearchBox={toggleSearchBox} toggleCreateBox={toggleCreateBox} />
            {
                search.finished && posts.length === 0 
                    ? <span className="posts-ErrorText">No Posts Found</span>
                    : <PostsLayout posts={posts} morePostsCallback={prepend_posts} />
            }
        </Core>
    );
}
