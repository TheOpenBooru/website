import React from "react";
import styled from "styled-components";
import { onLoadCallback } from "components/Media/image";

export default function GridItem({ post, callback, isTarget }) {
    let { preview, thumbnail } = post;
    let className = `media-${post.media_type}`;
    const scrollCallback = (e) => {
        if (isTarget) e.target.scrollIntoView();
    }
    const loadCallback = preview && preview.type === "image" ? onLoadCallback(preview, thumbnail) : null;
    
    return (
        <Container key={post.id} className={className} onClick={callback} onLoad={scrollCallback}>
            <Image
                alt=""
                src={thumbnail.url}
                width={thumbnail.width}
                height={thumbnail.height}
                
                onLoad={loadCallback}
            />
        </Container>
    );
}


const Container = styled.div`
    --MAX-SIZE:var(--IMAGE-SIZE);
    --MIN-SIZE:calc(var(--IMAGE-SIZE) / 4);

    min-width: var(--MIN-SIZE);
    min-height: var(--MIN-SIZE);
    max-width: var(--MAX-SIZE);
    max-height: var(--MAX-SIZE);

    display: flex;
    justify-content: center;
    align-items: center;
`


const Image = styled.img`
    cursor: pointer;
    height: var(--IMAGE-SIZE);
    width: 100%;
    object-fit: cover;
    
    background-color: var(--BACKGROUND-3);
    outline: var(--BACKGROUND-3) 0.3rem solid;
    border-radius: .2rem;

    transition: 0.2s all ease-out;
    
    &:hover{
        border-color: var(--BACKGROUND-3-HOVER);
        border-radius: calc(var(--IMAGE-SIZE) / 5);
    }
`