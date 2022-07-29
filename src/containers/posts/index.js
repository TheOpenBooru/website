import React from "react";
import Core from "containers/core";
import PostsInner from "./inner";

export default function Posts() {
    return (
        <Core
            title="Open Booru"
            description="Open Booru, an open-source imageboard booru serving user's posts amd videos"
        >
            <PostsInner />
        </Core>
    );
}
