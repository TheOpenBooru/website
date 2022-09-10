import React, { useState } from "react";
import { Posts, BSL, Types } from "js/booru";
import { GetServerSideProps } from "next";
import titleCase from "ap-style-title-case";
import GridPosts from "components/GridPosts";
import ColumnPosts from "components/ColumnPosts";
import PostsPage from "components/PostsPage";
import HeadInfo from "components/HeadInfo";
import LayoutSelector from "components/LayoutSelector";


export const getServerSideProps: GetServerSideProps = async ({ query: params, res }) => {
    let {query: bsl = ""} = params
    if (typeof bsl === "object") bsl = bsl[0]

    let query = BSL.decode(bsl)
    const PostQuery = Object.assign(new Types.PostQuery(), query)
    let posts = await Promise.race([
        Posts.search(PostQuery, 0, 20),
        new Promise((resolve, reject) =>
            setTimeout(() => resolve([]), 500)
        )
    ]);
    res.setHeader('Cache-Control', "max-age=60, public")
    return {
        props: { posts, bsl },
    }
}


export default function Index({ posts, bsl }) {
    let [layoutName, setLayoutName] = useState("column");
    let Layout = {
        "grid": GridPosts,
        "column": ColumnPosts
    }[layoutName];

    return (
        <>
            <HeadInfo title={GetTitle(bsl)} path="/" />
            <PostsPage
                LayoutElement={Layout}
                currentLayout={layoutName}
                setLayout={setLayoutName}
                initialPosts={posts}
            />
        </>
    )
}

function GetTitle(bsl: string) {
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
