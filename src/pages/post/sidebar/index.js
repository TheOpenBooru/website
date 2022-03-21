import React from "react";
import TagList from "./tag_list";
import PostInfo from "./post_data";

function SideBar(props) {
    let post = props.post;
    return (
        <div className="post-sidebar">
            <PostInfo post={post} />
            <br/>
            <TagList tags={post.tags}/>
        </div>
    );
}

export default SideBar;
