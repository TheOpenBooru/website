import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import useSearch from "hooks/searchHook";
import useMobile from "hooks/mobileHook";
import Overlay from "components/PostsOverlay";
import FullscreenPosts from "components/FullscreenPosts";
import LayoutSelector from "components/LayoutSelector";
import ColumnPosts from "components/ColumnPosts";
import Redirects from "js/redirects";



export default function Posts({ LayoutElement, currentLayout, setLayout, initialPosts = [] }) {
    const router = useRouter();
    let search = useSearch();
    let isMobile = useMobile();
    let [index, setIndex] = useState(0);
    let [useFullscreen, setUseFullscreen] = useState(false);
    


    function setQuery(query) {
        setIndex(0);
        setUseFullscreen(false)
        search.updateQuery(query)
    }
    
    const MorePostsCallback = async () => {
        try {await search.extend()} catch (e) {}
    }
    const RedirectCallback = (id) => () => {
        router.push(Redirects.post(id))
    }
    const FullscreenCallback = (id) => () => {
        let index = search.posts.findIndex((post) => post.id === id);
        setIndex(index);
        setUseFullscreen(true);
    }

    useEffect(() => {
        setUseFullscreen(false);
    }, [search.query])
    
    const posts = search.posts.length == 0 ? initialPosts : search.posts
    if (posts.length === 0) {
        return (
            <>
                <Overlay query={search.query} setQuery={setQuery} />
                <ErrorText>
                    No Posts Found
                </ErrorText>
            </>
        )
    } else if (useFullscreen) {
        return (
            <FullscreenPosts
                loading={search.loading}
                finished={search.finished}
                posts={search.posts}
                morePostsCallback={MorePostsCallback}
                exitCallback={() => setUseFullscreen(false)}
                query={search.query}
                setQuery={setQuery}
                index={index}
                setIndex={setIndex}
            />
        );
    } else {
        if (isMobile) LayoutElement = ColumnPosts
        return (
            <>
                {isMobile === false
                    ? <LayoutSelector layout={currentLayout} setLayout={setLayout} />
                    : null
                }
                <Overlay query={search.query} setQuery={setQuery} />
                <LayoutElement
                    posts={posts}
                    morePostsCallback={MorePostsCallback}
                    loading={!search.finished}
                    finished={search.finished}
                    query={search.query}
                    setQuery={setQuery}
                    postCallback={isMobile ? RedirectCallback : FullscreenCallback}
                    index={index}
                />
            </>
        );
    }
}


const ErrorText = styled.span` 
    display: block;
    width: 100vw;
    text-align: center;
    font-size: 4rem;
`