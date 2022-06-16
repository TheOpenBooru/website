import React from "react";

function Entry(props) {
    let { name, href, value } = props;
    return (
        <span>
            {name}:{"\t"}
            {href 
                ? <a href={href}>{value}</a>
                : value
            }
            <br />
        </span>
    );
}

export default function PostInfo(props) {
    let { post } = props;

    let created_at = new Date(post.created_at * 1000).toLocaleDateString();
    return (
        <div id="PostInfo-postData">
            <Entry name="ID" value={post.id} />
            <Entry name="Created On" value={created_at} />
            <Entry name="Views" value={post.views} />
            <Entry name="Upvotes" value={post.upvotes} />
            <Entry name="Downvotes" value={post.downvotes} />
            <Entry name="Source" value={post.source} href={post.source} />
        </div>
    );
}
