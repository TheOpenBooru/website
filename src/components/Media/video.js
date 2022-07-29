import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";


Video.propTypes = { video: PropTypes.object }
export default function Video({ video }) {
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
