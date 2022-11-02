import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Media from "components/Media";
import type { Types } from "openbooru";


interface Props {
    post: Types.Post,
    callback?: Function,
}
export default React.memo(function PostMedia({ post, callback }: Props) {
    let [useZoom, setUseZoom] = useState(false);
    if (useZoom) {
        return (
            <Container key={post.id} onClick={callback ? () => callback() : null}>
                <ZoomContainer>
                    <Media type={post.media_type} full={post.full} preview={post.preview} thumbnail={post.thumbnail} />
                </ZoomContainer>
            </Container>
        )
    } else {
        return (
            <Container key={post.id} onClick={callback && post.media_type !== "video" ? () => callback() : null}>
                <Media type={post.media_type} full={post.full} preview={post.preview} thumbnail={post.thumbnail} />
            </Container>
        )
    }
})


const ZoomContainer = styled.div`
    width:100%;
    padding:0 20% 0 20%;
    max-height:100%;
    overflow-y: auto;
    display: block;
`


const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    display: flex;
    place-items: center;
`
