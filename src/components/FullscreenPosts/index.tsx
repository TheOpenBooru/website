import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Redirects from "js/redirects";
import MobileFullscreen from "./mobile";
import DesktopFullscreen from "./desktop";
import useMobile from "hooks/mobileHook";

FullscreenPosts.propTypes = {
    loading: PropTypes.bool,
    finished: PropTypes.bool,
    posts: PropTypes.arrayOf(Object),
    morePostsCallback: PropTypes.func,
    exitCallback: PropTypes.func,
    query: PropTypes.object,
    setQuery: PropTypes.func,
    index: PropTypes.number,
    setIndex: PropTypes.func,
};

export default function FullscreenPosts({
    loading,
    finished,
    posts,
    morePostsCallback,
    exitCallback,
    query,
    setQuery,
    index,
    setIndex,
}) {
    const post = posts[index];
    if (post === undefined) return null;
    const prevPost = posts[index - 1];
    const nextPost = posts[index + 1];
    
    const postsRemaining = posts.length - (index + 1);
    if (postsRemaining < 32) {
        morePostsCallback();
    }

    function visitCallback() {
        let link = Redirects.post(post.id);
        window.location.href = link;
    }

    function nextPostCallback() {
        if (index !== posts.length - 1) {
            setIndex(index + 1);
        }
    }

    function prevPostCallback() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    return (
        <DesktopFullscreen
            {...{
                exitCallback,
                visitCallback,
                nextPostCallback,
                prevPostCallback,
                prevPost,
                post,
                nextPost,
                loading,
                finished,
            }}
        />
    );
}
