import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "components/PostSidebar";
import Core from "containers/core";
import Media from "components/Media";
import { Posts } from "js/booru";
import redirects from "js/redirects";
import "./post.css";

export default function Post(props) {
    let [post, setPost] = useState(undefined);
    let { id } = useParams();
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
                title={"Open Booru: Post"}
                description={`Open Booru Post ${id}: ${post.tags.join(" ")}`}
            >
                <div id="post-page">
                    <SideBar post={post} />
                    <div id="post-image-container">
                        <div id="post-image">
                            <Media full={post.full} preview={post.preview} type={post.media_type}/>
                        </div>
                    </div>
                </div>
            </Core>
        );
    }
}