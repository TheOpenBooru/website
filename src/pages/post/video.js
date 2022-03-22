import React, {useState,useEffect} from "react";

export default function Video(props) {
    let videoREF = React.useRef();
    function updateVolume(e) {
        localStorage.setItem("player-volume", e.target.volume);
    }

    function setVolume() {
        let volume = localStorage.getItem("player-volume") || 1;
        videoREF.current.oncanplay = () => {
            videoREF.current.volume = volume;
        };
    }

    useEffect(setVolume, []);
    return (
        <video
            className="post-image"
            src={props.src}
            ref={videoREF}
            controls
            onVolumeChange={updateVolume}
        />
    );
}
