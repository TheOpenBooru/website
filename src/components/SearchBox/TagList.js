import React from "react";
import "./tagList.css"

export default function TagList(props) {
    let { includeTags, setIncludeTags, excludeTags, setExcludeTags } = props;
    
    function removeTag(tag) {
        if (includeTags.includes(tag)) {
            includeTags = includeTags.filter((t) => t !== tag);
            setIncludeTags(includeTags);
        } else {
            excludeTags = excludeTags.filter((t) => t !== tag);
            setExcludeTags(excludeTags);
        }
    }

    function toggleTagInclude(tag) {
        if (!includeTags.includes(tag)) {
            removeTag(tag);
            includeTags.push(tag);
            setIncludeTags(includeTags);
        } else {
            removeTag(tag);
            excludeTags.push(tag);
            setExcludeTags(excludeTags);
        }
    }

    let allTags = includeTags.concat(excludeTags);
    return (
        <div id="searchbox-taglist">
            {allTags.map((tag) => <Tag tag={tag} key={tag}/>)}
        </div>
    );

    function Tag(props) {
        let { tag } = props;
        let included = includeTags.includes(tag);
        let tag_class = included ? "searchbox-tag-included" : "searchbox-tag-excluded";
        return (
            <div className="searchbox-tag">
                <img
                    className="searchbox-tag-remove"
                    src="/images/cross.svg"
                    alt="Remove Tag"
                    onClick={() => removeTag(tag)}
                />
                <span onClick={() => toggleTagInclude(tag)} className={"searchbox-tag-text " + tag_class}>{tag}</span>
            </div>
        );
    }
}
