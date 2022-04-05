import React from "react";

export default function Post(props) {
    let data = props.data;
    return (
        <a href={`/post/${data.id}`}>
            <img
                height={data.thumbnail.height} width={data.thumbnail.width}
                src={data.thumbnail.url}
                alt=""
                loading="lazy"
                className={`media-${data.type}`} />
        </a>
    );
}
