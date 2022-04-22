import React from "react";

function Tag(props) {
    let namespace = props.namespace || "generic";
    return <a className={`namespace-${namespace}`}>{props.name}</a>;
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
