import React from "react";
import Redirects from "js/redirects";

export default function TagList(props) {
    let tags = props.tags;
    if (!tags) {
        return <div id="postSidebar-tagList" />;
    } else {
        tags = tags.sort();

        return (
            <div id="postSidebar-tagList">
                {tags.map((tag, i) => (
                    <Tag key={i} tag={tag} />
                    ))}
            </div>
        );
    }
}

function Tag(props) {
    let { tag } = props;
    function searchTagCallback() {
        let queryJSON = window.sessionStorage.getItem("posts-search")
        let query = JSON.parse(queryJSON);
        query.include_tags.push(tag)
        let encoded = JSON.stringify(query);
        window.sessionStorage.setItem("posts-search", encoded)
        Redirects.goto(Redirects.postSearch());
    }
    return <span className="postSidebar-tagList-tag" onClick={searchTagCallback}>{tag}</span>;
}
