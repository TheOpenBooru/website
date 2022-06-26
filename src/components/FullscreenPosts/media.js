import React from "react";
import styled from "styled-components";
import Media from "components/Media";

export default function PostMedia(props) {
    let { post } = props;

    const Container = styled.div`
        position: relative;
        height: 100%;
        width: calc(100% - (2 * var(--BUTTON-WIDTH)));
        left: var(--BUTTON-WIDTH);
    
        display: flex;
        align-items: center;
        justify-content: center;
    `
    
    return (
        <Container key={post.id} >
            <Media type={post.media_type} full={post.full} preview={post.preview}/>
        </Container>
    )
}
