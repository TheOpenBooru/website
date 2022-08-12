import React, { useState } from "react";
import ColumnPosts from "components/ColumnPosts";
import PostsPage from "components/PostsPage";
import HeadInfo from "components/HeadInfo";


export default function Index() {
    return (
        <React.Fragment>
            <HeadInfo title="Open Booru" description=""/>
            <PostsPage LayoutElement={ColumnPosts} />
        </React.Fragment>
    )
}