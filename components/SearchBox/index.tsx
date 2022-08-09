import React, { useState } from "react";
import Booru from "js/booru";
import PropTypes from "prop-types";
import SortSelect from "./SortSelect";
import OrderButton from "./OrderButton";
import TagSearch from "./TagSearch";
import TagList from "./TagList";
import styles from "./SearchBox.module.css";


SearchBox.propTypes = {
    query: PropTypes.object,
    setQuery: PropTypes.func,
    close: PropTypes.func,
}
export default function SearchBox({ query, setQuery, close }) {
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
        <div id={styles.Container}>
            <div id={styles.Top}>
                <SortSelect sort={sort} setSort={setSort} />
                <OrderButton decending={decending} setDecending={setDecending} />
                <TagSearch includeTags={includeTags} setIncludeTags={setIncludeTags} />
            </div>
            <TagList
                includeTags={includeTags}
                setIncludeTags={setIncludeTags}
                excludeTags={excludeTags}
                setExcludeTags={setExcludeTags}
            />
            <button id={styles.SearchButton} onClick={saveQuery}>Search</button>
        </div>
    );
}
