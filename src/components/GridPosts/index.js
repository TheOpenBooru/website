import React from "react";
import { onLoadCallback } from "components/Media/image";
import Redirects from "js/redirects";
import "./grid.css";


export default function GridPosts(props) {
    let { posts, morePostsCallback } = props;

    let scrollHandler = (e) => {
        const { scrollTop, offsetHeight, scrollHeight } = e.target;
        let distanceFromTop = scrollTop + offsetHeight;
        let distanceFromBottom = scrollHeight - distanceFromTop;
        if (distanceFromBottom < 100) {
            morePostsCallback();
        }
    };

    return (
        <div id="gridPosts" onScroll={scrollHandler}>
            {posts.map((post) => <GridItem key={post.id} post={post}/>)}
        </div>
    );
}

function GridItem(props) {
    let { post } = props;
    let className = `gridPosts-item media-${post.media_type}`;
    let redirect = Redirects.post(post.id);
    let { preview, thumbnail } = post;
    let callback = preview && preview.type === "image" ? onLoadCallback(preview, thumbnail) : null;
    return (
        <a key={post.id} className={className} href={redirect}>
            <img
                className="gridPosts-image"
                src={thumbnail.url}
                width={thumbnail.width}
                height={thumbnail.height}
                alt=""
                onLoad={callback}
            />
        </a>
    );
    
}
