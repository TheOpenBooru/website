import React from "react";
import styled from "styled-components";

export default function Video(props) {
    let { video } = props
    function updateVolume(e) {
        localStorage.setItem("volume", e.target.value);
    }

    function setVolume(e) {
        let volume = Number(localStorage.getItem("volume"))
        e.target.volume = volume || 1.0;
    }

    return (
        <Player
            onCanPlay={setVolume}
            onVolumeChange={updateVolume}
            autoPlay
            loop
            controls
        >
            <source
                src={video.url}
                height={video.height}
                width={video.width}
                media={video.mime}
            />
        </Player>
    );
}


const Player = styled.video`
    width: 100%;
    height: 100%;
    object-fit: contain;
    background-color: black;
`
