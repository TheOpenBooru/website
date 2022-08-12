import React from "react";
import HeadInfo from "components/HeadInfo";
import ColumnPosts from "components/ColumnPosts";
import PostsPage from "components/PostsPage";


export default function Posts() {
    return (
        <React.Fragment>
            <HeadInfo title="Posts" description=""/>
            <PostsPage LayoutElement={ColumnPosts} />
        </React.Fragment>
    )
}