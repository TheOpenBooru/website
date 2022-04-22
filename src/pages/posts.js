import React from "react";
import Core from "./core";
import PostSearch from "../components/post_search";


function Posts() {
    return (
        <Core title="Open Booru: Posts" description="Open Source booru implementation">
            <PostSearch />
        </Core>
    );
}

export default Posts;
