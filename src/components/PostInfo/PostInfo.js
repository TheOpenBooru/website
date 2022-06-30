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
    let SourceEntry = () => {
        if (post.source) {
            let url = new URL(post.source);
            return <Entry name="Source" value={url.hostname} href={post.source} />
        } else {
            return <Entry name="Source" value="None" />
        }
    }

    return (
        <div id="PostInfo-postData">
            <Entry name="ID" value={post.id} />
            <Entry name="Created On" value={created_at} />
            <Entry name="Rating" value={created_at} />
            <SourceEntry />
            <Entry name="Upvotes" value={post.upvotes} />
            <Entry name="Downvotes" value={post.downvotes} />
        </div>
    );
}
