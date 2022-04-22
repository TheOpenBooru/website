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
    let style = {
        maxHeight: "100%",
        maxWidth: "100%",
    };
    return (
        <video
            style={style}
            className={props.className}
            src={props.src}
            ref={videoREF}
            onVolumeChange={updateVolume}
            autoPlay
            loop
            controls
        />
    );
}
