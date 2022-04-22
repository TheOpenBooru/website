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
    return (
        <div>
            <Entry name="Created At" value={new Date(post.created_at * 1000).toDateString()} />
        </div>
    );
}

export default PostInfo;
