import React, { useState } from "react";
import Redirects from "js/redirects";
import PostInfo from "components/PostInfo";
import PostMedia from "./media";
import { LeftButton, RightButton} from "./buttons";
import "./fullscreen.css";

export default function FullscreenPosts(props) {
    let { posts, morePostsCallback, noButtons } = props;
    let [ index, setIndex ] = useState(0);
    let [searchHash, setSearchHash] = useState(0);
    
    morePostsCallback ||= () => {};
    let postData = posts[index];
    let prevPost = posts[index - 1];
    let nextPost = posts[index + 1];

    if (posts.length - index < 32) {
        morePostsCallback();
    }

    if (postData == null) {
        return null;
    }


    let firstPost = posts[0];
    if (firstPost && searchHash !== firstPost.id) {
        setSearchHash(firstPost.id);
        setIndex(0);
    }


    function VisitPost() {
        let link = Redirects.post(postData.id);
        window.location.href = link;
    }

    function GoToNextPost() {
        if (index !== posts.length - 1) {
            setIndex(index + 1);
        }
    }

    function GoToPreviousPost() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    onkeydown = (e) => {
        let KEYBINDS = {
            w: GoToNextPost,
            ArrowUp: VisitPost,
            a: GoToNextPost,
            ArrowRight: GoToNextPost,
            d: GoToPreviousPost,
            ArrowLeft: GoToPreviousPost,
        };
        if (e.key in KEYBINDS) {
            KEYBINDS[e.key]();
        }
    };

    return (
        <div id="fullscreenPosts">
            <div id="fullscreenPosts-post">
                {noButtons ? null : <LeftButton callback={GoToPreviousPost} post={prevPost} />}
                <PostMedia post={postData} />
                {noButtons ? null : <RightButton callback={GoToNextPost} post={nextPost} />}
            </div>
            <PostInfo post={postData}/>
        </div>
    );
}
