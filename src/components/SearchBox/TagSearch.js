import React from "react";

export default function TagSearch(props) {
    let { includeTags, setIncludeTags } = props;
    function addTagCallback(e) {
        if (e.key !== "Enter") return;
        let tag = e.target.value;
        tag = tag.toLowerCase()
        if (!includeTags.includes(tag)) {
            e.target.value = "";
            setIncludeTags(includeTags.concat([tag]));
        }
    }

    return (
        <input id="searchbox-search" type="search" onKeyDown={addTagCallback} />
    )
}