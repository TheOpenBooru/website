import React from "react";
import PropTypes from "prop-types";
import Video from "./video";
import MediaImage from "./image";


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
            return <MediaImage full={full} preview={preview} lazy={lazy} />; // eslint-disable-line
        case "video":
            return <Video video={full} />;
        default:
            return null;
    }
}