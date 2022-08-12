import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

export default function GridItem({ post, callback, isTarget }) {
    let className = `media-${post.media_type}`;
    const scrollCallback = (e) => {
        if (isTarget) e.target.scrollIntoView();
    }
    const image = post.preview ?? post.thumbnail
    
    return (
        <Container key={post.id} className={className} onClick={callback} onLoad={scrollCallback}>
            <ImageContainer>
                <StyledImage
                    src={image.url}
                    alt=""
                    width={image.width}
                    height={image.height}
                    layout={"responsive"}
                    placeholder="blur"
                    blurDataURL={post.thumbnail.url}
                />
            </ImageContainer>
        </Container>
    );
}


const BorderRadius = css`
    transition: 0.2s all ease-out;
    border-radius: .2rem;
    
    &:hover{
        border-color: var(--BACKGROUND-3-HOVER);
        border-radius: calc(var(--IMAGE-SIZE) / 5);
    }
`;


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
`;


const ImageContainer = styled.div`
    display: block;
    cursor: pointer;
    height: auto;
    width: var(--IMAGE-SIZE);
    object-fit: cover;
    
    background-color: var(--BACKGROUND-3);
    outline: var(--BACKGROUND-3) 0.3rem solid;
    
    &:hover{
        border-color: var(--BACKGROUND-3-HOVER);
    }
    ${BorderRadius}
`;

const StyledImage = styled(Image)`
    ${BorderRadius}
`;
