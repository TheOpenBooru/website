import React from "react";
import PostInfo from "./PostInfo";
import TagList from "./TagList";
import "./PostInfo.css"

export default function Info(props) {
    let { post } = props;
    return (
        <div id="PostInfo">
            <PostInfo post={post} />
            <TagList tags={post.tags} />
        </div>
    )
}