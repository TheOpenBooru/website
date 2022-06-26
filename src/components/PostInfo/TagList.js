import React from "react";

export default function TagList(props) {
    let { tags } = props;
    tags ||= [];
    tags = tags.sort();
    return (
        <div id="PostInfo-tagList">
            {tags.map((tag) => <Tag key={tag} tag={tag} />)}
        </div>
    );
}

function Tag(props) {
    let { tag } = props;
    return <span className="PostInfo-tagList-tag">{tag}</span>;
}
