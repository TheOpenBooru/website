import React from "react";
import TagList from "./tag_list";
import PostInfo from "./post_data";
import "./sidebar.css";

function SideBar(props) {
    let post = props.post;
    return (
        <div id="post-sidebar">
            <TagList tags={post.tags} />
        </div>
    );
}

export default SideBar;
