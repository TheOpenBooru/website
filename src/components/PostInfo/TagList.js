import React from "react";
import Redirects from "js/redirects";

export default function TagList(props) {
    let tags = props.tags;

    function createTag() {
    }

    if (!tags) {
        return <div id="PostInfo-tagList" />;
    } else {
        tags = tags.sort();

        return (
            <div>
                <div id="PostInfo-tagList">
                    {tags.map((tag) => <Tag key={tag} tag={tag} />)}
                </div>
            </div>
        );
    }
}

function Tag(props) {
    let { tag } = props;
    return <span className="PostInfo-tagList-tag">{tag}</span>;
}
