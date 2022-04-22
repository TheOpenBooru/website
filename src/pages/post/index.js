import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBar from "../../components/sidebar";
import Core from "../core";
import Media from "../../components/media";
import { get } from "../../js/posts";
import redirects from "../../js/redirects";
import "./index.css";

export default (props) => {
    let [post, setPost] = useState(undefined);
    let [URL, setURL] = useState("");
    let { id } = useParams();
    if (id === undefined) window.location.replace(redirects.home());

    useEffect(() =>
        (async () => {
            let post = await get(id);
            setPost(post);
            setURL(post.full.url);
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
                <div id="post-page">
                    <div id="post-sidebar">
                        <SideBar post={post} />
                    </div>
                    <div id="post-image-container">
                        <div id="post-image">
                            <Media type={post.media_type} src={URL} />
                        </div>
                    </div>
                </div>
            </Core>
        );
    }
}