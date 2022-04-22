import React from "react";
import Video from "./video.js";

export default function Media(props) {
    let { type, src } = props;
    let style = {
        width: "100%",
        height: "100%",
        objectFit: "scale-down",
    };
    switch (type) {
        case "image":
        case "gif":
        case "animation":
            return (
                <img style={style} src={src} alt=""/>
            );
        case "video":
            return <Video src={src} />;

        default:
            return null;
    }
}