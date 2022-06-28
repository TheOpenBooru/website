import React, { useEffect, useState } from "react";
import Column from "./column";
import "./columns.css";


export default function ColumnPosts(props) {
    let { posts, morePostsCallback } = props;
    let [columnCount, setColumnCount] = useState(4);
    
    window.addEventListener('resize',calculateColumnCount, true);
    useEffect(calculateColumnCount, [])
    function calculateColumnCount(e) {
        let increments = (window.innerWidth / 500).toFixed();
        let columnCount = Math.max(2, Math.min(6, increments))
        setColumnCount(columnCount)
    }

    function scrollHandler(e){
        const { scrollTop, offsetHeight, scrollHeight } = e.target;
        let distanceFromTop = scrollTop + offsetHeight;
        let distanceFromBottom = scrollHeight - distanceFromTop;
        console.log(distanceFromBottom)
        if (distanceFromBottom < 100) {
            morePostsCallback();
        }
    }
    
    let columns = SplitPosts(posts, columnCount);

    return (
        <div id="columnsPosts-container">
            <div id="columnsPosts" onScroll={scrollHandler}>
                {columns.map((posts, i) => <Column key={i} posts={posts} />)}
            </div>
        </div>
    );
}




function SplitPosts(array, parts) {
    let buckets = Array.apply(null, Array(parts)).map(() => []);
    array.forEach((v) => {
        let smallestColumnIndex = getShortestColumnIndex(buckets);
        buckets[smallestColumnIndex].push(v);
    });
    return buckets;
}


function getShortestColumnIndex(columns) {
    let heights = new Array(columns.length).fill(0);

    columns.forEach((clmn, i) => {
        let total = 0;
        clmn.forEach((v) => (total += v.full.height / v.full.width));
        heights[i] = total;
    });
    
    let MinHeight = Math.min(...heights);
    let index = heights.indexOf(MinHeight);
    return index;
}
