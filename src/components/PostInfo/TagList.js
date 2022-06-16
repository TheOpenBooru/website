import React from "react";
import Redirects from "js/redirects";

export default function TagList(props) {
    let tags = props.tags;
    if (!tags) {
        return <div id="PostInfo-tagList" />;
    } else {
        tags = tags.sort();

        return (
            <div id="PostInfo-tagList">
                {tags.map((tag, i) => (
                    <Tag key={i} tag={tag} />
                    ))}
            </div>
        );
    }
}

function Tag(props) {
    let { tag } = props;
    return <span className="PostInfo-tagList-tag">{tag}</span>;
}
