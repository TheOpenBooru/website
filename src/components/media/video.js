import React from "react";
import Settings from "js/settings";
import styled from "styled-components";

export default function Video(props) {
    let { video } = props;
    function updateVolume(e) {
        Settings.Volume = e.target.volume;
    }

    function setVolume(e) {
        e.target.volume = Settings.Volume;
    }

    const Video = styled.video`
        max-height: 100%;
        max-width: 100%;
    `

    return (
        <Video
            className={props.className}
            src={video.url}
            onCanPlay={setVolume}
            onVolumeChange={updateVolume}
            autoPlay
            loop
            controls
        />
    );
}
