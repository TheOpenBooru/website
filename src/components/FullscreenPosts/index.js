import React, { useState } from "react";
import Video from "components/Media/video";
import Image from "components/Media/image";
import Sidebar from "components/PostSidebar";
import titleCase from "ap-style-title-case";
import Redirects from "js/redirects";
import Settings from "js/settings";
import "./fullscreen.css";

export default function FullscreenPosts(props) {
    let { posts, morePostsCallback } = props;
    let [index, setIndex] = useState(0);
    let [searchHash, setSearchHash] = useState(0);
    let post = posts[index];

    if (post == null) {
        morePostsCallback();
        return null;
    }

    if (posts.length - index < 32) {
        morePostsCallback();
    }

    let firstPost = posts[0];
    if (firstPost && searchHash !== firstPost.id) {
        setSearchHash(firstPost.id);
        setIndex(0);
    }

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

    let prevImg, nextImg;
    if (Settings.fullscreenButtonPreviews) {
        prevImg = posts[index - 1] ? posts[index - 1].thumbnail.url : null;
        nextImg = posts[index + 1] ? posts[index + 1].thumbnail.url : null;
    } else {
        prevImg = "/images/left-arrow.svg";
        nextImg = "/images/right-arrow.svg";
    }
    return (
        <div id="fullscreenPosts">
            <div className="fullscreenPosts-sidebar">
                <Sidebar post={post} />
            </div>

            <SideButton direction="left" img={prevImg} callback={prevPost} />
            <PostCount index={index} max={posts.length} />
            <div className="fullscreenPosts-center">
                <CenterImage post={post} />
            </div>
            <SideButton direction="right" img={nextImg} callback={nextPost} />
        </div>
    );
}

function CenterImage(props) {
    let { post } = props;
    
    if (post.media_type === "video") {
        return <Video video={post.full}/>
    } else {
        return <Image full={post.full} preview={post.preview} lazy={true} />
    }
}

function SideButton(props) { 
    let { callback, img, direction } = props;
    if (img) {
        return (
            <div
                id={`fullscreenPosts-${direction}Button`}
                className="fullscreenPosts-button"
                title={titleCase(direction)}
                onClick={callback}
                >
                <img className="fullscreenPosts-button-icon" src={img} alt="" />
            </div>
        );
    } else {
        return <div id={`fullscreenPosts-${direction}Button`} className="fullscreenPosts-button" />
    }
}
function PostCount(props) {
    let { index, max } = props;
    return (
        <span id="fullscreenPosts-count">
            {index + 1}
            <div style={{ marginTop: ".1rem", borderBottom: ".1rem solid black" }} />
            {max}
        </span>
    );
}