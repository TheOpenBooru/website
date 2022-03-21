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
    if (post.created_at === undefined)
        return <div className="post-info" />

    var language;
    try {
        let languageNames = new Intl.DisplayNames([post.language], { type: "language" });
        language = languageNames.of("en");
    } catch (e) {
        language = post.language;
    }

    return (
        <div className="post-info">
            <Entry name="Author" />
            <Entry name="Created At" value={new Date(post.created_at * 1000).toDateString()} />
            <Entry name="Views" value={post.views} />
            <Entry name="Upvotes" value={post.upvotes} />
            <Entry name="Downvotes" value={post.downvotes} />
            <Entry name="Source" />
            <Entry name="Language" value={language} />
            <Entry name="Age Rating" value={post.age_rating} />
        </div>
    );
}

export default PostInfo;