import React from "react";
import Video from "./video.js"
import "./media.css";


export default function Media(props){
    switch (props.type) {
        case "image":
        case "animation":
            return (
                <img
                    className="post-media"
                    src={props.src} alt=""
                />);
        case "video": {
            return (<Video src={props.src} className="post-media"/>);
        }
        default: {
            return (<div />);
        }
    }
}