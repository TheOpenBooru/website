import React from "react"
import styles from "./SearchBox.module.css";

export default function SortSelect({ sort, setSort }) {
    function setSortCallback(e) {
        setSort(e.target.value);
    }
    return (
        <select id={styles.sort} defaultValue={sort} onChange={setSortCallback}>
            <option value="created_at">Creation Date</option>
            <option value="id">ID</option>
            <option value="upvotes">Upvotes</option>
            <option value="downvotes">Downvotes</option>
        </select>
    )
}