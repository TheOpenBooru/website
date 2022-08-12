import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PostInfo from "components/PostInfo";
import PostMedia from "./media";
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
                <LeftButton callback={prevPostCallback} post={prevPost} />
                <PostMedia post={post} onClick={exitCallback} />
                <RightButton
                    callback={nextPostCallback}
                    post={nextPost}
                    loading={loading}
                    finished={finished}
                />
            </PostContainer>
            <PostInfo post={post} />
        </Container>
    );
}

const Container = styled.div`
    position: relative;
    height: var(--PAGE-HEIGHT);
    width: 100%;
    top: 0;
    left: 0;
    overflow-y: auto;
    overflow-x: hidden;

    --BUTTON-WIDTH: 5rem;
`;

const PostContainer = styled.div`
    width: 100%;
    height: calc(100% - 1.5rem);
    user-select: none;

    background-color: var(--BACKGROUND);
    border-bottom: #000 solid 1px;

    /* Flex */
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
`;
