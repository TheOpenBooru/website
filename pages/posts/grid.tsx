import React, { useState } from "react";
import HeadInfo from "components/HeadInfo";
import GridPosts from "components/GridPosts";
import PostsPage from "components/PostsPage";


export default function Grid() {
    return (
        <React.Fragment>
            <HeadInfo title="Open Booru" description=""/>
            <PostsPage LayoutElement={GridPosts} />
        </React.Fragment>
    )
}