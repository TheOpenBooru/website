import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NoSSR from 'react-no-ssr';
import styled from "styled-components";
import useSearch from "hooks/searchHook";
import useMobile from "hooks/mobileHook";
import Overlay from "components/PostsOverlay";
import FullscreenPosts from "components/FullscreenPosts";
import LayoutSelector from "components/LayoutSelector";
import ColumnPosts from "components/ColumnPosts";
import Redirects from "js/redirects";



export default function Posts({ LayoutElement, currentLayout, setLayout }) {
    const router = useRouter();
    let search = useSearch();
    let isMobile = useMobile();
    let [index, setIndex] = useState(0);
    let [useFullscreen, setUseFullscreen] = useState(false);
    
    useEffect(() => {
        setUseFullscreen(false);
    }, [search.query])



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
    if (search.posts.length === 0 && search.finished) {
        return (
            <NoSSR>
                <Overlay query={search.query} setQuery={setQuery} />
                <ErrorText>
                    No Posts Found
                </ErrorText>
            </NoSSR>
        )
    } else if (useFullscreen) {
        return (
            <NoSSR>
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
            </NoSSR>
        );
    } else if (isMobile) {
        return (
            <NoSSR>
                <Overlay query={search.query} setQuery={setQuery} />
                <ColumnPosts
                    loading={!search.finished}
                    finished={search.finished}
                    posts={search.posts}
                    morePostsCallback={MorePostsCallback}
                    query={search.query}
                    setQuery={setQuery}
                    postCallback={RedirectCallback}
                    index={index}
                />
            </NoSSR>
        );
    } else {
        return (
            <NoSSR>
                <LayoutSelector layout={currentLayout} setLayout={setLayout} />
                <Overlay query={search.query} setQuery={setQuery} />
                <LayoutElement
                    loading={!search.finished}
                    finished={search.finished}
                    posts={search.posts}
                    morePostsCallback={MorePostsCallback}
                    query={search.query}
                    setQuery={setQuery}
                    postCallback={FullscreenCallback}
                    index={index}
                />
            </NoSSR>
        );
    }
}


const ErrorText = styled.span` 
    display: block;
    width: 100vw;
    text-align: center;
    font-size: 4rem;
`