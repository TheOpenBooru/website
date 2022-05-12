import React from "react";
import Redirects from "../../../js/redirects";
import "./index.css";


function GridItem(props) {
    let { post } = props;
    let className = `media-${post.media_type}`;
    let redirect = Redirects.post(post.id);
    let image = post.thumbnail;
    return (
        <a key={post.id} className={className} href={redirect}>
            <img
                src={image.url}
                alt=""
                width={image.width}
                height={image.height}
            />
        </a>
    );
    
}
export default function GridPosts(props) {
    let { posts, posts_callback } = props;

    let scrollHandler = (e) => {
        const { scrollTop, offsetHeight, scrollHeight } = e.target;
        let distanceFromTop = scrollTop + offsetHeight;
        let distanceFromBottom = scrollHeight - distanceFromTop;
        if (distanceFromBottom < 2) {
            posts_callback();
        }
    };

    return (
        <div className="post-list" onScroll={scrollHandler}>
            {posts.map((post) => <GridItem key={post.id} post={post}/>)}
        </div>
    );
}
