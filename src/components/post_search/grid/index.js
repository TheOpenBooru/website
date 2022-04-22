import React from "react";
import Item from "../item";
import Redirects from "../../../js/redirects";
import "./index.css";

export default function GridPosts(props) {
    let { posts, posts_callback } = props;

    let scrollHandler = (e) => {
        const { scrollTop, offsetHeight, scrollHeight } = e.target;
        if (scrollTop + offsetHeight >= scrollHeight) {
            posts_callback();
        }
    };

    return (
        <div className="post-list" onScroll={scrollHandler}>
            {posts.map((post, i) => (
                <Item
                    key={post.id}
                    href={Redirects.post(post.id)}
                    image={post.thumbnail}
                    type={post.media_type}
                />
            ))}
        </div>
    );
}
