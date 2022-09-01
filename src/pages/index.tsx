import React, { useState } from "react";
import titleCase from "ap-style-title-case";
import GridPosts from "components/GridPosts";
import ColumnPosts from "components/ColumnPosts";
import PostsPage from "components/PostsPage";
import HeadInfo from "components/HeadInfo";
import useSearch from "hooks/searchHook";


export default function Index() {
    let [layoutName, setLayoutName] = useState("column");
    let Layout = {
        "grid": GridPosts,
        "column": ColumnPosts
    }[layoutName];

    
    return (
        <>
            <HeadInfo title={GetTitle()} />
            <PostsPage LayoutElement={Layout} currentLayout={layoutName} setLayout={setLayoutName} />
        </>
    )
}

function GetTitle() {
    let search = useSearch();
    let bsl = search.getBSL()

    if (!bsl) {
        return ""
    } else {
        bsl = bsl
            .replace(':',": ")
            .replace('_'," ")
        bsl = titleCase(bsl)
        return "Search | " + bsl
    }
}
