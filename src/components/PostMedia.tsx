import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Media from "components/Media";


PostMedia.propTypes = {
    post: PropTypes.object,
    noButtons: PropTypes.bool
}
export default function PostMedia({ post, noButtons = false, ...props }) {
    const ZoomCallback = console.log
    //     (e) => {
    //     console.log(e)
    // }

    return (
        <Container key={post.id} onKeyDown={console.log} {...props}>
            <Media type={post.media_type} full={post.full} preview={post.preview} thumbnail={post.thumbnail} />
        </Container>
    )
}


const Container = styled.div`
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 100%;

    display: block;
    align-items: center;
    justify-content: center;
`
