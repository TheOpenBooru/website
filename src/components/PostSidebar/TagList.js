import React from "react";
import "./TagList.css"

function Tag(props) {
    let namespace = props.namespace || "generic";
    return <span className={`namespace-${namespace}`}>{props.name}</span>;
}

function TagList(props) {
    let tags = props.tags;
    if (!tags) {
        return <div id="postSidebar-tagList" />;
    } else {
        tags = tags.sort();
        return (
            <div id="postSidebar-tagList">
                {tags.map((tag, i) => (
                    <Tag key={i} name={tag} />
                ))}
            </div>
        );
    }
}

export default TagList;
