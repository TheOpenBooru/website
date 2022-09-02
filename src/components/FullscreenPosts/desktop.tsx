import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PostInfo from "components/PostInfo";
import PostMedia from "components/PostMedia";
import { LeftButton, RightButton } from "./buttons";
import { Types } from "js/booru";

DesktopFullscreen.propTypes = {
    exitCallback: PropTypes.func,
    visitCallback: PropTypes.func,
    nextPostCallback: PropTypes.func,
    prevPostCallback: PropTypes.func,
    prevPost: PropTypes.object,
    post: PropTypes.object,
    nextPost: PropTypes.object,
    loading: PropTypes.bool,
    finished: PropTypes.bool,
};
export default function DesktopFullscreen({
    exitCallback,
    visitCallback,
    nextPostCallback,
    prevPostCallback,
    prevPost,
    post,
    nextPost,
    loading,
    finished,
}) {
    onkeydown = (e) => {
        // @ts-ignore
        if (e.target.tagName === "INPUT") return;
        let KEYBINDS = {
            Escape: exitCallback,
            w: visitCallback,
            ArrowUp: visitCallback,
            s: exitCallback,
            ArrowDown: exitCallback,
            a: nextPostCallback,
            ArrowRight: nextPostCallback,
            d: prevPostCallback,
            ArrowLeft: prevPostCallback,
        };
        if (e.key in KEYBINDS) KEYBINDS[e.key]();
    };

    return (
        <Container>
            <PostContainer>
                <LeftButton post={prevPost} callback={prevPostCallback} />
                <PostMedia post={post} onClick={exitCallback} />
                <RightButton post={nextPost} callback={nextPostCallback} loading={loading}/>
            </PostContainer>
            <PostInfo post={post} />
        </Container>
    );
}


const Container = styled.div`
    position: relative;
    max-height: var(--PAGE-HEIGHT);
    width: 100%;
    top: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;
`;


const PostContainer = styled.div`
    width: 100%;
    height: calc(var(--PAGE-HEIGHT) - 1.5rem);
    user-select: none;
    border-bottom: #000 solid 1px;

    /* Flex */
    display: grid;
    grid-template-columns: 5rem 1fr 5rem;
    grid-template-rows: 100%;
`;
