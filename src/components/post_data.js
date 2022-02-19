import React from "react";
import "../css/post.css";

function Entry(props) {
    return (
        <span>
            {props.name}: {"\t"}
            <a href={props.href}>
                {props.value ? props.value : "None"}
            </a>
            <br/>
        </span>
    );
}

function PostInfo(props) {
    let post = props.post
    if (!post) {
        return (<div className="post-info" />);
    }
    else {
        return (
            <div className="post-info" >
                <Entry name="Author" />
                <Entry name="Source" />
                <Entry name="Created At" value={new Date(post.created_at * 1000).toDateString()} />
                <Entry name="Language" value={post.language} />
                <Entry name="Age Rating" value={post.age_rating} />
                <Entry name="Views" value={post.views} />
                <Entry name="Upvotes" value={post.upvotes} />
                <Entry name="Downvotes" value={post.downvotes} />
            </div>
        );
    }
}

export default PostInfo;