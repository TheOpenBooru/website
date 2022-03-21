import React from "react";

let autocomplete_worker = new Worker("/workers/tag_autocomplete.js");

function Tag(props) {
    let tag = props.tag;
    return (
        <div>
            {tag.namespace}:{tag.name}
        </div>
    )
}

function PredictedTags(props) {
    var [predicted, setPredicted] = React.useState([]);
    let most_recent_timestamp = new Date();
    autocomplete_worker.onmessage = (e) => {
        if (e && e.data) {
            let timestamp = e.data.timestamp;
            let tags = e.data.tags;
            if (timestamp < most_recent_timestamp) {
                most_recent_timestamp = timestamp
                setPredicted(tags);
            }
        }
    };
    return (
        <div>
            {predicted.map(
                    (tag, i) => <Tag tag={tag} key={i} />
            )}
        </div>
    )
}

function PostSearch() {
    let searchBoxRef = React.useRef();
    function runSearch() {
        let search = searchBoxRef.current.value;
        if (search === "") {
            window.location.href = `/posts`;
        } else {
            window.location.href = `/posts?query=${search}`;
        }
    }
    function SearchBoxKeypress(e) {
        let search = e.target.value;
        if (e.code !== "Enter") {
            autocomplete_worker.postMessage(search);
        } else {
            runSearch();
        };
    }
    let params = new URLSearchParams(document.location.search);
    let query = params.get("query");
    return (
        <div>
            <input type="text" defaultValue={query} ref={searchBoxRef} onKeyPress={SearchBoxKeypress} />
            <input type="submit" value="Search" onClick={runSearch} />
            <PredictedTags/>
        </div>
    )
}



export default PostSearch;