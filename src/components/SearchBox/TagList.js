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

    function formatTag(tag) {
        tag = tag.charAt(0).toUpperCase() + tag.slice(1);
        return tag;
    }
    
    let allTags = includeTags.concat(excludeTags);
    return (
        <div>
            {allTags.map((tag) => <Tag tag={tag} key={tag}/>)}
        </div>
    );

    function Tag(props) {
        let { tag } = props;
        let included = includeTags.includes(tag);
        let tag_class = included ? "searchbox-tag-included" : "searchbox-tag-excluded";
        return (
            <div className="searchbox-tag">
                <div onClick={() => removeTag(tag)}>
                    <img
                        className="searchbox-tag-remove"
                        src="/images/cross.svg"
                        alt="Remove Tag"
                        />
                </div>
                {/* <div >
                    <img
                        className="searchbox-tag-include"
                        src="/images/plus-minus.svg"
                        alt="Toggle Tag Use"
                        />
                </div> */}
                <span onClick={() => toggleTagInclude(tag)} className={"searchbox-tag-text " + tag_class}>{formatTag(tag)}</span>
            </div>
        );
    }
}
