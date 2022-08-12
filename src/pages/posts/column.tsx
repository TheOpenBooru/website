import React, { useState } from "react";
import HeadInfo from "components/HeadInfo";
import ColumnPosts from "components/ColumnPosts";
import PostsPage from "components/PostsPage";


export default function Columns() {
    return (
        <React.Fragment>
            <HeadInfo title="Columns Posts" description=""/>
            <PostsPage LayoutElement={ColumnPosts} />
        </React.Fragment>
    )
}