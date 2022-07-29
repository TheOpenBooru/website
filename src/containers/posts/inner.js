import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ColumnPosts from "components/ColumnPosts";
import GridPosts from "components/GridPosts";
import FullscreenPosts from "components/FullscreenPosts";
import Overlay from "./overlay";
import { BSL } from "js/booru";
import useSearch from "js/searchHook";
import useMobile from "js/mobileHook";
import Redirects from "js/redirects";

export default function PostsInner() {
    const params = new URLSearchParams(window.location.search);
    const bsl = params.get("query") || "";
    let query = BSL.decode(bsl);
    let search = useSearch(query);
    let isMobile = useMobile();

    let { layout } = useParams();
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
    } 

    if (useFullscreen) {
        return (
            <FullscreenPosts
                loading={search.loading}
                finished={search.finished}
                posts={search.posts}
                morePostsCallback={search.extend}
                exitCallback={() => setUseFullscreen(false)}
                query={search.query}
                setQuery={setQuery}
                index={index}
                setIndex={setIndex}
            />
        );
    } else {
        let PostsLayout = layout === "grid" ? GridPosts : ColumnPosts;
        return (
            <React.Fragment>
                <Overlay query={search.query} setQuery={setQuery} />
                <PostsLayout
                    loading={!search.finished}
                    finished={search.finished}
                    posts={search.posts}
                    morePostsCallback={search.extend}
                    query={search.query}
                    setQuery={setQuery}
                    postCallback={isMobile ? RedirectCallback : FullscreenCallback}
                    index={index}
                    key={layout}
                />
            </React.Fragment>
        );
    }
}
