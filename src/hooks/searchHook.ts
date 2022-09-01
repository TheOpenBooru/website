import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Types, Posts, BSL } from "js/booru";

const DefaultQuery = new Types.PostQuery();

function getPostQueryfromParams(params) {
    let bsl = params["query"] || "";
    if (typeof bsl === "object") bsl = bsl[0]
    let query = BSL.decode(bsl);
    return query;
}

export default function useSearch() {
    let [query, setQuery] = useState(null);
    let [posts, setPosts] = useState([]);
    let [finished, setFinished] = useState(false);
    let [lock, setLock] = useState(false);
    let router = useRouter();


    async function extend(count = 100) {
        if (lock || finished || query === null) return;
        setLock(true);
        
        let newPosts = await Posts.search(query, posts.length, count);
        setPosts(posts.concat(newPosts));
        
        if (newPosts.length < count) setFinished(true);
        setLock(false);
    }

    function clear() {
        setPosts([]);
        setFinished(false);
    }

    function updateQuery(query) {
        clear();
        setQuery(query);

        let bsl = BSL.encode(query);
        let search = ""
        if (bsl) {
            let params = new URLSearchParams({ query: bsl });
            search = params.toString();
        }
        window.location.search = search;
    }

    const getBSL = () => BSL.encode(query);


    useEffect(() => {
        if (!router.isReady) return;

        let new_query = getPostQueryfromParams(router.query)
        if (new_query !== query) {
            clear();
            setQuery(new_query);
            extend();
        } // @ts-ignore
    }, [router.isReady, router.query])

    let Export = { extend, updateQuery, query, posts, finished, loading: lock, getBSL };
    return Export
}

