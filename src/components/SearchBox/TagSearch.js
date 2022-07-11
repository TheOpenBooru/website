import React, { useRef, useState } from "react";
import Booru from "js/booru";
import "./tagSearch.css"

export default function TagSearch(props) {
    let { includeTags, setIncludeTags } = props;
    let [ predictedTags, setPredictedTags ] = useState([]);
    let [ text, setText ] = useState("");
    
    function addTagCallback(tag) {
        return () => {
            tag = tag.toLowerCase();
            setPredictedTags([]);
            setText("")
            if (!includeTags.includes(tag)) {
                setIncludeTags(includeTags.concat([tag]));
            }
        };
    }

    async function loadPredictedTags(text) {
        if (text.length === 0) {
            setPredictedTags([]);
        } else {
            let query = new Booru.Types.TagQuery();
            query.name_like = text;
            query.limit = 7;
            let tags = await Booru.Tags.search(query)
            setPredictedTags(tags);
        }
    }

    function keyPressHandler(e) {
        if (e.key !== "Enter") return;
        if (predictedTags.length > 0) {
            let tag = predictedTags[0]
            addTagCallback(tag.name)()
        }
    }

    function onInput(e) {
        let text = e.target.value;
        text = text.replace(' ','_')
        text = text.toLowerCase();
        setText(text);
        loadPredictedTags(text);
    }

    return (
        <React.Fragment>
            <input
                id="searchbox-search"
                type="search"
                value={text}
                onKeyDownCapture={keyPressHandler}
                onChange={onInput}
                onKeyDown={addTagCallback}
            />
            <PredictedTags tags={predictedTags} callback={addTagCallback} />
        </React.Fragment>
    );
}


function PredictedTags(props) {
    let { tags, callback } = props;
    if (tags.length === 0) {
        return null
    } else {
        return (
            <div id="searchbox-autocomplete">
                {tags.map((tag) => (
                    <span
                        key={tag.name}
                        className="searchbox-autocomplete-item searchbox-autocomplete"
                        onClick={callback(tag.name)}
                    >
                        {tag.name}
                    </span>
                ))}
            </div>

        )
    }
}