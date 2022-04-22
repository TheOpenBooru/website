import React, { useState, useRef, useEffect } from "react";
import BottomBar from "./bottom-bar";
import Media from "../../media";
import Sidebar from "../../sidebar";
import Redirects from "../../../js/redirects";
import "./index.css";

export default function FullscreenPost(props) {
    let [index, setIndex] = useState(0);
    let baseRef = useRef(null);
    let { posts_callback, posts } = props;
    
    if (posts.length - index < 32) {
        posts_callback();
    }
    let post = posts[index];
    if (post == null) return null;
    
    // Handlers
    function visitPost() {
        window.location.href = Redirects.post(post.id);
    }

    function nextPost() {
        if (index !== posts.length - 1) {
            setIndex(index + 1);
        }
    }

    function prevPost() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    onkeydown = (e) => {
        let KEYBINDS = {
            a: nextPost,
            ArrowRight: nextPost,
            d: prevPost,
            ArrowLeft: prevPost,
            w: visitPost,
            ArrowUp: visitPost,
        };
        if (e.key in KEYBINDS) {
            KEYBINDS[e.key]();
        }
    };


    // Scroll to top to prevent cropped content
    let onLoadHandler = () => baseRef.current.scrollTo(0, 0);
    
    let url = post.preview ? post.preview.url : post.full.url;
    return (
        <div id="post-fullscreen-base" ref={baseRef} onLoad={onLoadHandler}>
            <div className="viewer-tag_sidebar">
                <Sidebar post={post} />
            </div>
            <div
                id="viewer-button-left"
                className="viewer-button"
                title="Previous"
                onClick={prevPost}
            >
                <img
                    className="viewer-button-icon"
                    src="/images/left-arrow.svg"
                    alt="previous"
                />
            </div>
            <div className="viewer-center">
                <div className="viewer-image">
                    <Media src={url} type={post.media_type} />
                </div>
            </div>
            <div />
            <div
                id="viewer-button-right"
                className="viewer-button"
                title="Next"
                onClick={nextPost}
            >
                <img className="viewer-button-icon" src="/images/right-arrow.svg" alt="next" />
            </div>
            <BottomBar posts={posts} index={index} setIndex={setIndex} />
        </div>
    );
}
