import React from "react";
import { useParams } from "react-router-dom";
import Core from "./core";
import PostSearch from "../components/post_search";
import { PostSearch as _PostSearch, PostQuery } from "../js/posts";

export default function Posts() {
    let { layout } = useParams();
    
    let query = new PostQuery();
    let post_search = new _PostSearch(query);
    return (
        <Core>
            <PostSearch layout={layout} search={post_search} />
        </Core>
    );
}