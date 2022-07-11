import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Core from "containers/core";
import FullscreenPosts from "components/FullscreenPosts";
import LoadingIcon from "components/Loading";
import MessageBox from "components/MessageBox";
import Booru from "js/booru";
import redirects from "js/redirects";


export default function PostPage(props) {
    let { id } = useParams();
    if (id === undefined) window.location.replace(redirects.home());
    const { data: post, status } = useQuery(`post-${id}`, async () => Booru.Posts.get(id))

    if (status === 'error') {
        redirects.goto(redirects.home())
    } else if (status === 'loading'){
        return (
            <Core title={`Open Booru: Post ${id}`} description={`Open Booru Post ${id}`} />
        );
    } else {
        return (
            <Core
                title={`Open Booru: Post ${id}`}
                description={`Open Booru Post ${id}: ${post.tags.join(" ")}`}
            >
                <FullscreenPosts posts={[post]} noButtons/>
            </Core>
        );
    }
}