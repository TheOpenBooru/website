import React from "react";
import Settings from "js/settings";

export function LeftButton(props) {
    let { callback, post } = props;
    let img = CreateImage("/images/left-arrow.svg", post);

    return (
        <div id="fullscreenPost-LeftButton" className="fullscreenPosts-Button" onClick={callback}>
            <img className="fullscreenPosts-button-icon" src={img} alt="" />
        </div>
    );
}


export function RightButton(props) {
    let { callback, post } = props;
    let img = CreateImage("/images/right-arrow.svg", post);
    return (
        <div id="fullscreenPost-RightButton" className="fullscreenPosts-Button" onClick={callback}>
            <img className="fullscreenPosts-button-icon" src={img} alt="" />
        </div>
    );
}

function CreateImage(defaultImage, post) {
    let img;
    if (post) {
        let enablePreview = Settings.fullscreenPreviews
        img = enablePreview ? post.thumbnail.url : defaultImage;
    }
    return img;
}
