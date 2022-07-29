import React, { useState } from "react";
import { Tags } from "js/booru";
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
            let tags = await Tags.autocomplete(text, 5);
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
                    <button
                        key={tag.name}
                        className="searchbox-autocomplete-item searchbox-autocomplete"
                        onClick={callback(tag.name)}
                    >
                        {tag.name}
                    </button>
                ))}
            </div>

        )
    }
}