import React from "react";
import FullscreenPost from "./fullscreen";

export default function Item(props) {
    let { callback, image, type, href } = props;
    return (
        <a className={`media-${type}`} href={href} onClick={callback}>
            <img src={image.url} alt="" width={image.width} height={image.height} />
        </a>
    );
}
