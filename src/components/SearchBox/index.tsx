import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Booru from "js/booru";
import SortSelect from "./SortSelect";
import OrderButton from "./OrderButton";
import TagSearch from "./TagSearch";
import TagList from "./TagList";


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
        <Container>
            <Top>
                <SortSelect sort={sort} setSort={setSort} />
                <OrderButton decending={decending} setDecending={setDecending} />
                <TagSearch includeTags={includeTags} setIncludeTags={setIncludeTags} />
            </Top>
            <TagList
                includeTags={includeTags}
                setIncludeTags={setIncludeTags}
                excludeTags={excludeTags}
                setExcludeTags={setExcludeTags}
            />
            <SearchButton onClick={saveQuery}>Search</SearchButton>
        </Container>
    );
}


const Container = styled.div`
    /* Position */
    aspect-ratio: 16/9;
    min-height: 15rem;
    min-width: 15rem;
    width: min(50vw,30rem);

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* Look */
    background-color: var(--BACKGROUND-3);
    border: .2em solid var(--BORDER-1);
    border-radius: 1rem;
`

const Top = styled.div`
    border-bottom: .2em solid var(--BORDER-1);
    display: flex;
    padding: .2rem;

    align-items: center;
    justify-content: space-around;
    
    & > *{
        margin: .2rem;
    }
`

const SearchButton = styled.button`
    width:100%;
    height: 2.5rem;
    min-height: 1rem;
    border-radius: 0 0 .9rem .9rem;
    
    border-width: 0;
    border-top: .2em solid var(--BORDER-1);
    background-color: var(--BACKGROUND-2);
    font-weight: bold;

    &:active{
        background-color: var(--BACKGROUND-4);
        font-size: 1.1rem;
    }
`