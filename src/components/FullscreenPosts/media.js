import React from "react";
import styled from "styled-components";
import Media from "components/Media";

export default function PostMedia(props) {
    let { post, noButtons } = props;
    
    let style = {}
    if (noButtons) {
        style.width = "100%";
        style.left = "unset";
    }
    return (
        <Container key={post.id} style={style}>
            <Media type={post.media_type} full={post.full} preview={post.preview}/>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    height: 100%;
    width: calc(100% - (2 * var(--BUTTON-WIDTH)));
    left: var(--BUTTON-WIDTH);

    display: flex;
    align-items: center;
    justify-content: center;
`