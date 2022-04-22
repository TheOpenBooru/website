import React, { useState } from "react";
import "./bottom-bar.css";

export default function BottomBar(props) {
    let { index, setIndex, posts } = props;
    let bottom_posts = [];

    for (let i = -5; i <= 5; i++) {
        let post = posts[index + i];
        if (post === undefined) {
            bottom_posts.push(
                <span className="post-bottombar-preview" style={{ opacity: 0 }} key={index + i} />,
            );
        } else {
            bottom_posts.push(
                <img
                    className="post-bottombar-preview"
                    alt=""
                    key={index + i}
                    loading="lazy"
                    src={post ? post.thumbnail.url : null}
                    onClick={() => setIndex(index + i)}
                />,
            );
        }
    }

    return (
        <div id="post-bottombar-container">
            <div id="post-bottombar">{bottom_posts}</div>
        </div>
    );
}
