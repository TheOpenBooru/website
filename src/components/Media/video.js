import React from "react";

export default function Video(props) {
    let { video } = props;
    function updateVolume(e) {
        localStorage.setItem("volume", e.target.value);
    }

    function setVolume(e) {
        let volume = Number(localStorage.getItem("volume"))
        e.target.volume = volume || 1.0;
    }


    const VideoStyle = {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    };

    return (
        <video
            className={props.className}
            style={VideoStyle}
            src={video.url}
            height={video.height}
            width={video.width}
            autoPlay
            loop
            controls
            onCanPlay={setVolume}
            onVolumeChange={updateVolume}
        />
    );
}
