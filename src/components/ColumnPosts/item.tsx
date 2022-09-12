import React, { Ref, useEffect, useState } from "react";
import styled, { css } from "styled-components";
import { Types } from "openbooru";
import Image from "next/image";
import Redirects from "js/redirects";


type ItemProps = {
    index: number,
    post: Types.Post,
    postCallback: any,
    isTarget: boolean,
    priority: boolean,
    parentRef: any,
}
export default React.memo(function Item({ index, post, postCallback, isTarget, parentRef, priority }: ItemProps) {
    const clamp = (value, min, max) => Math.min(Math.max(value, min), max)
    let preview_type = post.preview?.type
    let image = preview_type !== "video"
        ? post.preview
        : post.thumbnail;
    image ??= post.thumbnail
    
    
    function scrollTo(e) {
        let elem: Element = e.target;
        let scroller = parentRef?.current;
        if (scroller) {
            let { top } = elem.getBoundingClientRect()
            top -= (window.innerHeight / 4)
            scroller.scrollTo({top})
        }
    }

    let aspectRatio = (image.height / image.width)
    let targetAspectRatio = clamp(aspectRatio, 0.5, 2)
    let adjustedHeight = (image.height / aspectRatio) * targetAspectRatio
    
    
    return (
        <ImageContainer
            title={`Post: ${post.id}`}
            onClick={postCallback({id:post.id, index})}
            onLoad={isTarget ? scrollTo: null}
            // @ts-ignore, styled component custom prop
            type={post.media_type}
        >
            <a href={Redirects.post(post.id)} onClick={(e) => { e.preventDefault(); }}>
                <StyledImage
                    src={image.url}
                    alt=""
                    layout="responsive"
                    width={image.width}
                    height={adjustedHeight}
                    objectFit="cover"
                    sizes="300px"
                    
                    lazyRoot={parentRef}
                    priority={priority}
                    
                    placeholder="blur"
                    blurDataURL={post.thumbnail.url}
                />
            </a>
        </ImageContainer>
    );
});


const BorderRadius = css`
    transition: all 0.1s ease-in;
    border-radius: 1rem;
    &:hover {
        outline-width: 0.3rem;
        border-radius: 2rem;
    }
`;


const ImageContainer = styled.div`
    display: block;
    height: auto;
    width: 100%;
    cursor: pointer;

    margin: .2rem;
    margin-bottom: 1rem;
    outline: 0.3rem solid;
    background: var(--BACKGROUND-3);
    
    ${
        // @ts-ignore, styled components prop
        ({ type }) => {
        switch (type) {
            case "video":
                return "outline-color: #008600;"
            case "animation":
                return "outline-color: #000085;"
            case "image":
                return "outline-color: var(--BACKGROUND-3);"
            default:
                return "";
        }
    }}
    ${BorderRadius}
`;




const StyledImage = styled(Image)`
    ${BorderRadius}
`;
