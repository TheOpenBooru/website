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
        if (post) {
            window.history.replaceState(null, null, Redirects.post(post.id));
        }
    }, [index, posts])
    
    function exit() {
        window.history.replaceState(null, null, initialUrl);
        exitCallback();
    }
    function visit() {
        let link = Redirects.post(post.id);
        window.location.href = link;
    }

    
    function nextPostCallback() {
        if (index !== posts.length - 1) {
            setIndex(index + 1)
        }
    }
    
    function prevPostCallback() {
        if (index > 0) {
            setIndex(index - 1)
        }
    }
    
    if (post === undefined) {
        debugger;
        return null;
    } else {
        return (
            <DesktopFullscreen
                {...{
                    visitCallback: visit,
                    exitCallback: exit,
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
