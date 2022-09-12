import React from "react";
import { Image } from "openbooru/lib/types";
import styled from "styled-components";
import PropTypes from "prop-types";

interface Props {
    video: Image,
    poster: Image,
}
export default function Video({ video, poster }:Props) {
    function updateVolume(e) {
        localStorage.setItem("volume", e.target.volume);
    }

    function setVolume(e) {
        let volume = Number(localStorage.getItem("volume"))
        e.target.volume = volume || 1.0;
    }

    return (
        <Player
            onCanPlay={setVolume}
            onVolumeChange={updateVolume}
            loop
            controls
            poster={poster && poster.type === "image" ? poster?.url : null}
        >
            <source
                src={video.url}
                height={video.height}
                width={video.width}
                type={video.mimetype}
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
