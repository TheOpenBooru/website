import React from "react";
import styled from "styled-components";
import { onLoadCallback } from "components/Media/image";

export default function Item({ post, postCallback, isTarget }) {
    let { id, preview, thumbnail, media_type } = post;

    const loadCallback = (preview && preview.media_type === "image")
        ? onLoadCallback(preview, thumbnail, true)
        : null;

    return (
        <Container onLoad={(e) => isTarget ? e.target.scrollIntoView() : null}>
            <Image
                alt=""
                src={thumbnail.url}
                height={thumbnail.height}
                width={thumbnail.width}
                className={"media-" + media_type}
                title={`Post: ${id}`}
                onClick={postCallback}
                onLoad={loadCallback}
            />
        </Container>
    );
}


const Container = styled.div`
    width: 100%;
`;


const Image = styled.img`
    cursor: pointer;

    width: 100%;
    height: auto;
    border-radius: 1rem;
    outline: 0.2rem solid var(--BACKGROUND-3);
    background-color: var(--BACKGROUND-3);
    transition: all 0.1s ease-in;

    &:hover {
        outline-width: 0.3rem;
        border-radius: 3rem;
    }
`;
