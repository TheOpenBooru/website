import React from "react";

export default function Image(props) {
    let { full, preview } = props;

    function onLoadCallback(e) {
        let target = e.target;
        if (target.src === full.url) return;
        let { width: elmWidth, height: elmHeight } = target.getBoundingClientRect();
        if (preview.width < elmWidth || preview.height < elmHeight) {
            target.loading = "lazy";
            target.src = full.url;
            target.height = full.height;
            target.width = full.width;
        }
    }

    let ImgStyle = {
        width: "100%",
        height: "100%",
        objectFit: "contain",
    };
    let image = preview ? preview : full;
    return (
        <img
            width={image.width}
            height={image.height}
            src={image.url}
            alt=""
            style={ImgStyle}
            onLoad={preview ? onLoadCallback : null}
        />
    );
}
