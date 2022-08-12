import React from "react";
import styled, { css } from "styled-components";
import { Types } from "openbooru";
import Image from "next/image";


type ItemProps = {
    post: Types.Post,
    postCallback: any,
    isTarget: boolean,
}
export default function Item({ post, postCallback, isTarget }:ItemProps) {
    let image = post.preview ?? post.thumbnail
    return (
        // @ts-ignore, element has scrollIntoView function, Typescript doesn't see it?
        <Container onLoad={(e) => isTarget ? e.target.scrollIntoView() : null}> 
            <ImageContainer
                title={`Post: ${post.id}`}
                onClick={postCallback}
            >
                <StyledImage
                    src={image.url}
                    alt=""
                    height={image.height}
                    width={image.width}
                    layout="responsive"

                    placeholder="blur"
                    blurDataURL={post.thumbnail.url}
                />
            </ImageContainer>
        </Container>
    );
}


const Container = styled.div`
    width: 100%;
`;


const BorderRadius = css`
    transition: all 0.1s ease-in;
    border-radius: 1rem;
    &:hover {
        outline-width: 0.3rem;
        border-radius: 3rem;
    }
`;


const ImageContainer = styled.div`
    display: block;
    width: 100%;
    height: auto;
    cursor: pointer;

    outline: 0.2rem solid var(--BACKGROUND-3);
    background-color: var(--BACKGROUND-3);
    
    ${BorderRadius}
`;


const StyledImage = styled(Image)`
    ${BorderRadius}
`;
