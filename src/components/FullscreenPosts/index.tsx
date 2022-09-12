import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import Redirects from "js/redirects";
import DesktopFullscreen from "./desktop";

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
    let router = useRouter();
    let [initialUrl, _] = useState(router.asPath);

    const post = posts[index];
    const prevPost = posts[index - 1];
    const nextPost = posts[index + 1];

    useEffect(() => {
        const postsRemaining = posts.length - (index + 1);
        if (postsRemaining < 32) {
            morePostsCallback();
        }
    }, [index, posts, morePostsCallback]);
    
    useEffect(() => {
        let post = posts[index];
        window.history.replaceState(null,null, Redirects.post(post.id))
    }, [index, posts])
    
    function exit() {
        window.history.replaceState(null, null, initialUrl);
        exitCallback()
    }

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
        debugger;
        return null;
    } else {
        return (
            <DesktopFullscreen
                {...{
                    exitCallback: exit,
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
