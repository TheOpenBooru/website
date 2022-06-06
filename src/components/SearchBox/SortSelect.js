import React from "react"

export default function SortSelect(props) {
    let { sort, setSort } = props;
    function setSortCallback(e) {
        setSort(e.target.value);
    }
    return (
        <select defaultValue={sort} id="searchbox-sort" onChange={setSortCallback}>
            <option value="created_at">Creation Date</option>
            <option value="id">ID</option>
            <option value="views">Views</option>
            <option value="upvotes">Upvotes</option>
            <option value="downvotes">Downvotes</option>
        </select>
    )
}