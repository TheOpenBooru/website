import React from "react";
import Item from "../item";
import Redirects from "../../../js/redirects";
import "./index.css";


function get_minimum_column_height_index(columns) {
    let bucket_heights = new Array(columns.length).fill(0);
    columns.forEach((clmn, i) => {
        let total = 0;
        clmn.forEach((v) => total += v.full.height / v.full.width);
        bucket_heights[i] = total;
    })
    let min_height = Math.min(...bucket_heights)
    let index = bucket_heights.indexOf(min_height);
    if (index === -1) {
        return 0;
    } else {
        return index;
    }
}

function SplitPosts(array, parts) {
    // Create an array of arrays
    // eslint-disable-next-line
    if (array === [] || array === undefined) {
        return new Array(parts).fill([]);
    }
    else {
        let buckets = Array.apply(null, Array(parts)).map(() => Array());
        array.forEach((v) => {
            let min_height_index = get_minimum_column_height_index(buckets)
            console.log(min_height_index);
            buckets[min_height_index].push(v)
        });
        return buckets;
    }
}

export default function ColumnPosts(props) {
    let { posts, posts_callback } = props;
    let columns = SplitPosts(posts, 4);

    let scrollHandler = (e) => {
        const { scrollTop, offsetHeight, scrollHeight } = e.target;
        if (scrollTop + offsetHeight >= scrollHeight) {
            posts_callback();
        }
    };

    return (
        <div className="post-columns" onScroll={scrollHandler}>
            {columns.map((posts,i) => (
                <div key={i} className="post-single-column">
                    {posts.map((post, i) => (
                        <Item
                            key={post.id}
                            href={Redirects.post(post.id)}
                            image={post.preview ? post.preview : post.thumbnail}
                            type={post.media_type}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}
