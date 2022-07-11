import React, { useState } from "react";
import Booru from "js/booru";
import SortSelect from "./SortSelect";
import OrderButton from "./OrderButton";
import TagSearch from "./TagSearch";
import TagList from "./TagList";
import { BSL } from "js/booru";
import "./searchBox.css";

export default function SearchBox(props) {
    let { query, setQuery, close } = props;
    if (query === null) {
        query = new Booru.Types.PostQuery();
    }
    let [includeTags, setIncludeTags] = useState(query.include_tags);
    let [excludeTags, setExcludeTags] = useState(query.exclude_tags);
    let [sort, setSort] = useState(query.sort);
    let [decending, setDecending] = useState(query.descending);

    function saveQuery() {
        let NewQuery = new Booru.Types.PostQuery();
        NewQuery.sort = sort;
        NewQuery.descending = decending;
        NewQuery.include_tags = includeTags;
        NewQuery.exclude_tags = excludeTags;
        setQuery(NewQuery);
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
