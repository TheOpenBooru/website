import React from "react";

function Entry(props) {
    return (
        <span>
            {props.name}:{"\t"}
            {props.value != null ? props.value : "None"}
            {props.edittable ? <button>Edit</button> : null}
            <br />
        </span>
    );
}

function PostInfo(props) {
    let post = props.post;
    if (post.created_at === undefined) return <div className="post-info" />;

    let created_at = new Date(post.created_at * 1000).toLocaleDateString();
    return (
        <div id="post_data">
            <Entry name="ID" value={post.id} />
            <Entry name="Created At" value={created_at} />
            <Entry name="Source" value={post.source} />
            <Entry name="Views" value={post.views} />
        </div>
    );
}

export default PostInfo;
