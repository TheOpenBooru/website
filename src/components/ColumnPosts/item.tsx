import React, { Ref, useState } from "react";
import styled, { css } from "styled-components";
import { Types } from "openbooru";
import Image from "next/image";
import Redirects from "js/redirects";


type ItemProps = {
    post: Types.Post,
    postCallback: any,
    isTarget: boolean,
    parentRef,
    priority: boolean
}
export default function Item({ post, postCallback, parentRef, isTarget, priority }: ItemProps) {
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

    return (
        <ImageContainer
            title={`Post: ${post.id}`}
            onClick={postCallback(post.id)}
            // @ts-ignore, element has scrollIntoView function, Typescript doesn't see it?
            onLoad={(e) => isTarget ? scrollTo(e) : null}
            // @ts-ignore, styled component custom prop
            type={post.media_type}
        >
            <a href={Redirects.post(post.id)} onClick={(e) => { e.preventDefault(); }}>
                <StyledImage
                    src={image.url}
                    alt=""
                    layout="responsive"
                    height={image.height}
                    width={image.width}
                    sizes="300px"

                    priority={priority}
                    placeholder="blur"
                    blurDataURL={post.thumbnail.url}
                />
            </a>
        </ImageContainer>
    );
}


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
    width: 100%;
    height: auto;
    cursor: pointer;

    margin: .2rem;
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
