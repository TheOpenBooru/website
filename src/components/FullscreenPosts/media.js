import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Media from "components/Media";


PostMedia.propTypes = {
    post: PropTypes.object,
    noButtons: PropTypes.bool
}
export default function PostMedia({ post, noButtons = false , ...props}) {
    let style = {}
    if (noButtons) {
        style.width = "100%";
    } else {
        style.width = "calc(100% - (2 * var(--BUTTON-WIDTH)))";
        style.left = "var(--BUTTON-WIDTH)";
    }

    return (
        <Container key={post.id} style={style} {...props}>
            <Media type={post.media_type} full={post.full} preview={post.preview}/>
        </Container>
    )
}

const Container = styled.div`
    cursor: pointer;
    position: relative;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
`
