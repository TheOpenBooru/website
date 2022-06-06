import React from "react";
import Video from "./video";
import Image from "./image";

export default function Media(props) {
    let { type, full, preview, lazy } = props;
    switch (type) {
        case "image":
        case "animation":
            return <Image full={full} preview={preview} lazy={lazy} />;
        case "video":
            return <Video video={full} />;
        default:
            return null;
    }
}