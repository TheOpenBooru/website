import React from "react";
import TagList from "./TagList";
import PostInfo from "./PostInfo";
import "./sidebar.css";

export default function SideBar(props) {
    let { post } = props;
    return (
        <div id="postSidebar">
            <PostInfo post={post} />
            <TagList tags={post.tags} />
        </div>
    );
}
