import React from "react";
import FutureImage from "next/future/image";
import styled, {css} from "styled-components";
import Redirects from "js/redirects";


export default function GridItem({ post, callback, parentRef, isTarget }) {
    let { thumbnail } = post;
    let className = `media-${post.media_type}`;
    
    function scrollToCallback(e) {
        let elem: Element = e.target;
        let scroller: Element = parentRef.current;
        let { top } = elem.getBoundingClientRect()
        top -= (window.innerHeight / 4)
        scroller.scrollTo({top})
    }
    
    return (
        <a href={Redirects.post(post.id)} onClick={(e) => e.preventDefault()}>
            <Container
                key={post.id}
                className={className}
                onClick={callback}
                onLoad={isTarget ? scrollToCallback : null}
                // @ts-ignore, styled component custom prop
                type={post.media_type}
            >
                <Image
                    alt=""
                    src={thumbnail.url}
                    width={thumbnail.width}
                    height={thumbnail.height}

                    placeholder={"blur"}
                    blurDataURL={thumbnail.url}
                />
            </Container>
        </a>
    );
}


const BorderRadius = css`
    border-radius: 1rem;

    &:hover{
        transition: 0.2s all ease-out;
        border-color: var(--BACKGROUND-3-HOVER);
        border-radius: calc(var(--IMAGE-SIZE) / 5);
    }
`;


const Container = styled.div`
    --MAX-SIZE:var(--IMAGE-SIZE);
    --MIN-SIZE:calc(var(--IMAGE-SIZE) / 6);

    min-width: var(--MIN-SIZE);
    min-height: var(--MIN-SIZE);
    max-width: var(--MAX-SIZE);
    max-height: var(--MAX-SIZE);
    display: flex;
    justify-content: center;
    align-items: center;

    
    background-color: var(--BACKGROUND-3);
    outline: 0.3rem solid;
    ${
        // @ts-ignore, styled component custom prop
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
`


const Image = styled(FutureImage)`
    cursor: pointer;
    height: var(--IMAGE-SIZE);
    width: 100%;
    object-fit: cover;
    
    ${BorderRadius}
`