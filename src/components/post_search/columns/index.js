import React from "react";
import Item from "../item";
import Redirects from "../../../js/redirects";
import "./index.css";

function SplitPosts(array, parts) {
    // Create an array of arrays
    // eslint-disable-next-line
    let buckets = Array.apply(null, Array(parts)).map(() => Array());
    array.forEach((v, i) => buckets[i % parts].push(v));
    return buckets;
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
