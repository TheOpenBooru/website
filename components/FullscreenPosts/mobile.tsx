import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import PostMedia from "./media";
import PostInfo from "components/PostInfo";
import useWidth from "hooks/widthHook";
import { Types } from "js/booru";

MobileFullscreen.propTypes = {
    exitCallback: PropTypes.func,
    visitCallback: PropTypes.func,
    nextPostCallback: PropTypes.func,
    prevPostCallback: PropTypes.func,
    prevPost: PropTypes.objectOf(Types.Post),
    post: PropTypes.objectOf(Types.Post),
    nextPost: PropTypes.objectOf(Types.Post),
    finished: PropTypes.bool,
};
export default function MobileFullscreen({
    exitCallback,
    visitCallback,
    nextPostCallback,
    prevPostCallback,
    prevPost,
    post,
    nextPost,
    finished,
}) {
    let width = useWidth();
    let [offset, setOffset] = useState(0);
    let [lastX, setLastX] = useState(null);
    let [lastDrag, setLastDrag] = useState(new Date());

    function checkDrag() {
        const CurrentTime = new Date();
        const TimeSinceLastDrag = (CurrentTime - lastDrag) / 1000;

        if (TimeSinceLastDrag < 1) return;
        if (Math.abs(offset) > 20) {
            setOffset(offset / 1.02);
        } else {
            setOffset(0);
        }
    }

    // useEffect(() => setInterval(checkDrag, 100), []);

    function dragStart(e) {
        setLastX(e.touches[0].pageX);
    }

    function drag(e) {
        setLastDrag(new Date());
        let X = e.touches[0].pageX;
        let movement = lastX - X;
        setLastX(X);

        let newOffset = offset - movement * 2;
        if ((!nextPost && newOffset < 0) || (!prevPost && newOffset > 0)) return;

        if (newOffset > width / 2) {
            prevPostCallback();
            setOffset(-newOffset + 20);
        } else if (newOffset < -(width / 2)) {
            nextPostCallback();
            setOffset(-newOffset - 20);
        } else {
            setOffset(newOffset);
        }
    }

    const style = prevPost ? { left: `calc(-100vw + ${offset}px)` } : { left: offset + "px" };
    if (post === undefined) {
        return <Container />;
    } else {
        return (
            <PageContainer onTouchStart={dragStart} onTouchMove={drag}>
                <Container style={style}>
                    <Post post={prevPost} />
                    <Post post={post} />
                    <Post post={nextPost} />
                </Container>
            </PageContainer>
        );
    }
}

function Post({ post }) {
    if (!post) {
        return null;
    } else {
        return (
            <PostContainer>
                <PostMedia post={post} noButtons />
            </PostContainer>
        );
    }
}

const PageContainer = styled.div`
    position: absolute;
    left: 0;
    height: var(--PAGE-HEIGHT);
    width: 100vw;

    overflow: hidden;
`;

const Container = styled.div`
    position: absolute;
    height: var(--PAGE-HEIGHT);

    user-select: none;
    overflow: hidden;
    display: flex;
`;

const PostContainer = styled.div`
    position: relative;
    width: 100vw;
    height: var(--PAGE-HEIGHT);
    top: 0;

    user-select: none;
    background-color: var(--BACKGROUND);

    /* Flex */
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
`;
