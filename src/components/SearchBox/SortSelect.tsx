import React from "react"
import styled from "styled-components";

interface Props{
    sort: string,
    setSort: Function,
}
export default React.memo(function SortSelect({ sort, setSort }: Props) {
    function setSortCallback(e) {
        setSort(e.target.value);
    }
    return (
        <Selector defaultValue={sort} onChange={setSortCallback}>
            <option value="created_at">Creation Date</option>
            <option value="id">ID</option>
            <option value="upvotes">Upvotes</option>
            <option value="downvotes">Downvotes</option>
        </Selector>
    )
});


const Selector = styled.select`
    border-radius: .2rem;
    color: black;
    border: 0;
`