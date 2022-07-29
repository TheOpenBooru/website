import React from "react";
import PropTypes from "prop-types";
import Video from "./video";
import Image from "./image";


Media.propTypes = {
    type:PropTypes.string,
    full:PropTypes.object,
    preview:PropTypes.object,
    lazy:PropTypes.bool,
}
export default function Media({ type, full, preview, lazy = false }) {
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