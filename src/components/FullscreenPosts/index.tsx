import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Redirects from "js/redirects";
import DesktopFullscreen from "./desktop";
import { Post, PostQuery } from "openbooru/lib/types";

interface Props {
    loading: boolean,
    finished: boolean,
    posts: Post[],
    morePostsCallback: Function,
    exitCallback: Function,
    query: PostQuery,
    setQuery: Function,
    index: number,
    setIndex: Function,
};

export default React.memo(function FullscreenPosts({
        loading,
        finished,
        posts,
        morePostsCallback,
        exitCallback,
        query,
        setQuery,
        index,
        setIndex,
        }:Props) {
    let router = useRouter();

    const post = posts[index];
    const prevPost = posts[index - 1];
    const nextPost = posts[index + 1];

    useEffect(() => {
        const postsRemaining = posts.length - (index + 1);
        if (postsRemaining < 32) {
            morePostsCallback();
        }
    }, [index, posts, morePostsCallback]);
    
    function exit() {
        exitCallback();
    }

    function visit() {
        let link = Redirects.post(post.id);
        router.push(link);
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
})
