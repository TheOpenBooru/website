import React from "react";
import styled from "styled-components";

export default function Video(props) {
    let { video } = props;
    function updateVolume(e) {
        sessionStorage.setItem("volume", e.target.value);
    }
    function setVolume(e) {
        e.target.volume = sessionStorage.getItem("volume");
    }

    const Video = styled.video`
        max-height: 100%;
        max-width: 100%;
    `;

    return (
        <Video
            className={props.className}
            src={video.url}
            autoPlay
            loop
            controls
            onCanPlay={setVolume}
            onVolumeChange={updateVolume}
        />
    );
}
