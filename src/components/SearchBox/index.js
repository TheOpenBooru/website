import React, { useState } from "react";
import { PostQuery } from "js/booru";
import SortSelect from "./SortSelect";
import OrderButton from "./OrderButton";
import TagSearch from "./TagSearch";
import TagList from "./TagList";
import "./searchBox.css";

export default function SearchBox(props) {
    let { query, setQuery, close } = props;
    if (!query) query = new PostQuery();
    let [includeTags, setIncludeTags] = useState(query.include_tags);
    let [excludeTags, setExcludeTags] = useState(query.exclude_tags);
    let [sort, setSort] = useState(query.sort);
    let [decending, setDecending] = useState(query.descending);

    function saveQuery() {
        let tmp_query = new PostQuery();
        tmp_query.sort = sort;
        tmp_query.descending = decending;
        tmp_query.include_tags = includeTags;
        tmp_query.exclude_tags = excludeTags;
        setQuery(tmp_query);
        close();
    }

    return (
        <div id="searchbox-container">
            <div id="searchbox-top">
                <OrderButton decending={decending} setDecending={setDecending} />
                <SortSelect sort={sort} setSort={setSort} />
                <TagSearch includeTags={includeTags} setIncludeTags={setIncludeTags} />
            </div>
            <TagList
                includeTags={includeTags}
                setIncludeTags={setIncludeTags}
                excludeTags={excludeTags}
                setExcludeTags={setExcludeTags}
            />
            <button id="searchbox-searchButton" onClick={saveQuery}>Search</button>
        </div>
    );
}
