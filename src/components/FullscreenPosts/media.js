import React from "react";
import Media from "components/Media";

export default function PostMedia(props) {
    let { post } = props;

    return (
        <div id="fullscreenPosts-media" key={post.id} >
            <Media type={post.media_type} full={post.full} preview={post.preview}/>
        </div>
    )
}
