import React from "react";

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

    React.useEffect(setVolume, []);
    return (
        <video
            className={props.className}
            src={props.src}
            ref={videoREF}
            controls
            onVolumeChange={updateVolume}
        />
    );
}
