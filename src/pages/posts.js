import React from "react";
import Core from "./core";
import PostSearch from "../components/post_search";


function Posts() {
    return (
        <Core title="Posts" description="Use this page to search for posts">
            <PostSearch/>
        </Core>
    );
}

export default Posts;
