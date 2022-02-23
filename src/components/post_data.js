import React from "react";
import "../css/post.css";

function Entry(props) {
    return (
        <span>
            {props.edittable ? <button>Edit</button>:<div/>} 
            {props.name}: {"\t"}
            <a href={props.href}>
                {props.value != null ? props.value : "None"}
            </a>
            <br />
        </span>
    );
}

function PostInfo(props) {
    let PostTextBox = React.useRef();
    let post = props.post
    if (post.created_at === undefined) 
    return (<div className="post-info" />);
    
    try {
        let languageNames = new Intl.DisplayNames([post.language], { type: 'language' });
        var language = languageNames.of('en');
    }
    catch (e) {
        var language = post.language;
    }

    return (
        <div className="post-info" >
            <Entry name="Author" />
            <Entry name="Created At" value={new Date(post.created_at * 1000).toDateString()} />
            <Entry name="Views" value={post.views} />
            <Entry name="Upvotes" value={post.upvotes} />
            <Entry name="Downvotes" value={post.downvotes} />
            <br/>
            <Entry edittable name="Source"/>
            <Entry edittable name="Language" value={language} />
            <Entry edittable name="Age Rating" value={post.age_rating} />
            <br/>
        </div>
    );
}

export default PostInfo;