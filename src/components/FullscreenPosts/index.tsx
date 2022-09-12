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
    let isMobile = useMobile();
    
    useEffect(() => {
        const postsRemaining = posts.length - (index + 1);
        if (postsRemaining < 32) {
            morePostsCallback();
        }
    }, [index, posts, morePostsCallback]);
    
    const post = posts[index];
    const prevPost = posts[index - 1];
    const nextPost = posts[index + 1];

    function visitCallback() {
        let link = Redirects.post(post.id);
        window.location.href = link;
    }
    
    function updateIndex(index) {
        setIndex(index);
    }
    
    function nextPostCallback() {
        if (index !== posts.length - 1) {
            updateIndex(index + 1)
        }
    }
    
    function prevPostCallback() {
        if (index > 0) {
            updateIndex(index - 1)
        }
    }
    
    if (post === undefined) {
        return null;
    } else {
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
}
