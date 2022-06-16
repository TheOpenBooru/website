import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Core from "containers/core";
import FullscreenPosts from "components/FullscreenPosts";
import { Posts } from "js/booru";
import redirects from "js/redirects";

export default function PostPage(props) {
    let { id } = useParams();
    let [post, setPost] = useState(undefined);
    if (id === undefined) window.location.replace(redirects.home());

    useEffect(() =>
        (async () => {
            try {
                let post = await Posts.get(id);
                setPost(post);
            } catch (e) {
                window.location.replace(redirects.home());
            }
        })(),[id],
    );


    if (post === undefined) {
        return null;
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