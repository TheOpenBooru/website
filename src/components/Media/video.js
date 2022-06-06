import React from "react";

export default function Video(props) {
    let { video } = props;
    function updateVolume(e) {
        sessionStorage.setItem("volume", e.target.value);
    }
    function setVolume(e) {
        e.target.volume = sessionStorage.getItem("volume");
    }


    const VideoStyle = {
        width: "100%",
        height: "100%",
        objectFit: "scale-down",
    };

    return (
        <vide
            className={props.className}
            style={VideoStyle}
            src={video.url}
            autoPlay
            loop
            controls
            onCanPlay={setVolume}
            onVolumeChange={updateVolume}
        />
    );
}
