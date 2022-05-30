import React from "react";
import Video from "./video.js";

export default function Media(props) {
    let { type, media } = props;
    let img_style = {
        width: "100%",
        height: "100%",
        objectFit: "scale-down",
    };
    switch (type) {
        case "image":
        case "animation":
            return (
                <img width={media.width} height={media.height} style={img_style} src={media.url} alt=""/>
            );
        case "video":
            return <Video video={media} />;
        default:
            return null;
    }
}