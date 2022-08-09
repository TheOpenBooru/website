import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import LoadingIcon from "components/LoadingIcon";
import useWidth from "hooks/widthHook";
import { SplitPosts } from "./utils";
import Item from "./item";

const Clamp = (value, min, max) => Math.max(min, Math.min(max, value));
ColumnPosts.propTypes = {
    loading: PropTypes.bool,
    finished: PropTypes.bool,
    posts: PropTypes.arrayOf(PropTypes.object),
    index: PropTypes.number,
    query: PropTypes.object,
    setQuery: PropTypes.func,
    postCallback: PropTypes.func,
    morePostsCallback: PropTypes.func,
};
export default function ColumnPosts({ posts, loading, morePostsCallback, postCallback, index }) {
    let width = useWidth();
    let containerRef = useRef();

    // let increments = (width / 500).toFixed();
    // let columnCount = Clamp(increments, 2, 8);
    let columnCount = 4;
    let columns = SplitPosts(posts, columnCount);

    function checkScroll() {
        if (containerRef.current === null) return;

        const { scrollTop, offsetHeight, scrollHeight } = containerRef.current;
        let distanceFromTop = scrollTop + offsetHeight;
        let distanceFromBottom = scrollHeight - distanceFromTop;
        if (distanceFromBottom < 400) {
            morePostsCallback();
        }
    }

    useEffect(checkScroll, [morePostsCallback]);
    let focusPostID = posts[index]?.id;
    return (
        <Container ref={containerRef} onScroll={checkScroll}>
            <Columns>
                {columns.map((posts, a) => (
                    <ColumnContainer key={a}>
                        {posts.map((post) => (
                            <Item
                                key={post.id}
                                post={post}
                                postCallback={postCallback(post.id)}
                                isTarget={focusPostID === post.id}
                            />
                        ))}
                    </ColumnContainer>
                ))}
            </Columns>
            {loading ? (
                <LoadingContainer>
                    <LoadingIcon fadeIn />
                </LoadingContainer>
            ) : null}
        </Container>
    );
}

const Container = styled.div`
    height: var(--PAGE-HEIGHT);
    overflow-y: auto;

    display: flex;
    flex-flow: nowrap column;
    align-items: center;
`;

const Columns = styled.div`
    width: 100%;
    /* Flex */
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const ColumnContainer = styled.div`
    --COLUMN-WIDTH: 300px;
    --IMAGE-MARGIN: 0.5rem;

    width: var(--COLUMN-WIDTH);
    margin: var(--IMAGE-MARGIN);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--IMAGE-MARGIN);
`;

const LoadingContainer = styled.div`
    margin-bottom: 2rem;
`;
