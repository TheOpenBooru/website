import React from "react";
import "./tag_list.css"

function Tag(props) {
    let namespace = props.namespace || "generic";
    return <span className={`namespace-${namespace}`}>{props.name}</span>;
}

function TagList(props) {
    let tags = props.tags;
    if (!tags) {
        return <div className="tag-list" />;
    } else {
        tags = tags.sort();
        return (
            <div className="tag-list">
                {tags.map((tag, i) => (
                    <Tag key={i} name={tag} />
                ))}
            </div>
        );
    }
}

export default TagList;
