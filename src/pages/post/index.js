import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/sidebar";
import Core from "../core";
import Media from "../../components/media";
import { get } from "../../js/posts";
import redirects from "../../js/redirects";
import "./post.css";

export default (props) => {
    let [post, setPost] = useState(undefined);
    let [URL, setURL] = useState("");
    let { id } = useParams();
    if (id === undefined) window.location.replace(redirects.home());

    useEffect(() =>
        (async () => {
            try {
                let post = await get(id);
                setPost(post);
                setURL(post.full.url);
            } catch (e) {
                window.location.replace(redirects.home());
            }
        })(),[id],
    );


    if (post === undefined) {
        return null;
    } else {
        console.log(post);
        return (
            <Core
                title={`Open Booru: Post ${id}`}
                description={`Open Booru Post ${id}: ${post.tags.join(" ")}`}
            >
                <div id="post-page">
                    <SideBar post={post} />
                    <div id="post-image-container">
                        <div id="post-image">
                            <Media type={post.media_type} media={post.full} />
                        </div>
                    </div>
                </div>
            </Core>
        );
    }
}