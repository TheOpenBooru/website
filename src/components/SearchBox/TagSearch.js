import React, { useRef, useState } from "react";
import { Tags, TagQuery } from "js/booru";
import "./tagSearch.css"

export default function TagSearch(props) {
    let { includeTags, setIncludeTags } = props;
    let [ predictedTags, setPredictedTags ] = useState([]);
    let inputRef = useRef();

    function addTagCallback(tag) {
        return () => {
            tag = tag.toLowerCase();
            setPredictedTags([]);
            inputRef.current.value = "";
            if (!includeTags.includes(tag)) {
                setIncludeTags(includeTags.concat([tag]));
            }
        };
    }

    async function loadPredictedTags(text) {
        let query = new TagQuery();
        query.name_like = text;
        query.limit = 5;
        let tags = await Tags.search(query)
        setPredictedTags(tags);
    }

    function tagChange(e) {
        let text = e.target.value;
        if (text.length === 0) {
            setPredictedTags([]);
        } else {
            loadPredictedTags(text);
        }
    }

    return (
        <React.Fragment>
            <input
                id="searchbox-search"
                type="search"
                ref={inputRef}
                onChange={tagChange}
                onKeyDown={addTagCallback}
            />
            {predictedTags.length === 0 ? null : (
                <div id="searchbox-autocomplete">
                    {predictedTags.map((tag) => (
                        <span
                            key={tag.name}
                            className="searchbox-autocomplete-item searchbox-autocomplete"
                            onClick={addTagCallback(tag.name)}
                        >
                            {tag.name}
                        </span>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
}
