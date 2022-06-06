import React from "react";
import Redirects from "js/redirects";
import { onLoadCallback } from "components/Media/image";
import "./columns.css";

export default function ColumnPosts(props) {
    let { posts, morePostsCallback } = props;

    let columns = SplitPosts(posts, 4);

    let scrollHandler = (e) => {
        const { scrollTop, offsetHeight, scrollHeight } = e.target;
        let distanceFromTop = scrollTop + offsetHeight;
        let distanceFromBottom = scrollHeight - distanceFromTop;
        if (distanceFromBottom < 100) {
            morePostsCallback();
        }
    };

    return (
        <div id="columnsPosts" onScroll={scrollHandler}>
            {columns.map((posts, i) => (
                <div key={i} className="columnsPosts-individualColumn">
                {posts.map((post, i) => (
                        <ColumnItem key={post.id} post={post} />
                    ))}
                </div>
            ))}
        </div>
    );
}

function ColumnItem(props) {
    let { post } = props;
    let { preview, thumbnail } = post
    let className = `columnsPosts-post media-${post.media_type}`;
    let redirect = Redirects.post(post.id);
    
    return (
        <a className={className} href={redirect} title={`Post: ${post.id}`}>
            <img
                className="columnsPosts-image"
                src={thumbnail.url}
                width={thumbnail.width}
                height={thumbnail.height}
                alt=""
                onLoad={onLoadCallback(preview,thumbnail,true)}
            />
        </a>
    );
}

function SplitPosts(array, parts) {
    // Create an array of arrays
    // eslint-disable-next-line
    if (!array || array === []) {
        return new Array(parts).fill([]);
    } else {
        let buckets = Array.apply(null, Array(parts)).map(() => []);
        array.forEach((v) => {
            let min_height_index = get_minimum_column_height_index(buckets);
            buckets[min_height_index].push(v);
        });
        return buckets;
    }
}

function get_minimum_column_height_index(columns) {
    let bucket_heights = new Array(columns.length).fill(0);
    columns.forEach((clmn, i) => {
        let total = 0;
        clmn.forEach((v) => (total += v.full.height / v.full.width));
        bucket_heights[i] = total;
    });
    let min_height = Math.min(...bucket_heights);
    let index = bucket_heights.indexOf(min_height);
    if (index === -1) {
        return 0;
    } else {
        return index;
    }
}
