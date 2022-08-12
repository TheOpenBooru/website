import React, { useState } from "react";
import Overlay from "components/PostsOverlay";
import FullscreenPosts from "components/FullscreenPosts";
import { BSL } from "js/booru";
import useSearch from "hooks/searchHook";
import useMobile from "hooks/mobileHook";
import Redirects from "js/redirects";
import { useRouter } from "next/router";

export default function Posts({ LayoutElement }) {
    let isMobile = useMobile();
    let router = useRouter();
    const params = router.query;
    let bsl = params["query"] || "";
    if (typeof bsl === "object") bsl = bsl[0]
    let query = BSL.decode(bsl);

    let search = useSearch(query);

    let [index, setIndex] = useState(0);
    let [useFullscreen, setUseFullscreen] = useState(false);
    

    function setQuery(query) {
        search.updateQuery(query);
        setIndex(0);

        let bsl = BSL.encode(query);
        if (bsl) {
            let params = new URLSearchParams({ query: bsl });
            window.location.search = params.toString();
        }
    }

    const RedirectCallback = (id) => Redirects.callback(Redirects.post(id))
    const FullscreenCallback = (id) => () => {
        setUseFullscreen(true);
        let index = search.posts.findIndex((post) => post.id === id);
        setIndex(index);
        window.history.replaceState(null,null, Redirects.post(id));
    }
    const MorePostsCallback = async () => {
        try {
            await search.extend();
        } catch {}
    }

    if (useFullscreen) {
        return (
            <FullscreenPosts
                loading={search.loading}
                finished={search.finished}
                posts={search.posts}
                morePostsCallback={MorePostsCallback}
                exitCallback={() => {
                    setUseFullscreen(false);
                    window.history.replaceState(null,null, Redirects.search());
                }}
                query={search.query}
                setQuery={setQuery}
                index={index}
                setIndex={setIndex}
            />
        );
    } else {
        return (
            <React.Fragment>
                <Overlay query={search.query} setQuery={setQuery} />
                <LayoutElement
                    loading={!search.finished}
                    finished={search.finished}
                    posts={search.posts}
                    morePostsCallback={MorePostsCallback}
                    query={search.query}
                    setQuery={setQuery}
                    postCallback={isMobile ? RedirectCallback : FullscreenCallback}
                    index={index}
                />
            </React.Fragment>
        );
    }
}
