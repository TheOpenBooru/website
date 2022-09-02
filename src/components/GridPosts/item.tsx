import React from "react";
import FutureImage from "next/future/image";
import styled from "styled-components";
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
        <Container key={post.id} className={className} onClick={callback} onLoad={isTarget ? scrollToCallback : null}>
            <a href={Redirects.post(post.id)} onClick={(e) => { e.preventDefault(); }}>
                <Image
                    alt=""
                    src={thumbnail.url}
                    width={thumbnail.width}
                    height={thumbnail.height}
                />
            </a>
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


const Image = styled(FutureImage)`
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