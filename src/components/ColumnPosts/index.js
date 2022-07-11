import React, { useEffect, useState } from "react";
import Column from "./column";
import LoadingIcon from "components/Loading";
import { SplitPosts } from "./utils";
import styled from "styled-components";
import "./columns.css";

export default function ColumnPosts(props) {
    let { posts, loading, morePostsCallback } = props;
    let [columnCount, setColumnCount] = useState(4);

    window.addEventListener("resize", calculateColumnCount, true);
    useEffect(calculateColumnCount, []);
    function calculateColumnCount(e) {
        let increments = (window.innerWidth / 500).toFixed();
        let columnCount = Math.max(2, Math.min(6, increments));
        setColumnCount(columnCount);
    }

    function scrollHandler(e) {
        const { scrollTop, offsetHeight, scrollHeight } = e.target;
        let distanceFromTop = scrollTop + offsetHeight;
        let distanceFromBottom = scrollHeight - distanceFromTop;
        if (distanceFromBottom < 400) {
            morePostsCallback();
        }
    }

    let columns = SplitPosts(posts, columnCount);

    return (
        <Container onScroll={scrollHandler}>
            <ColumnsContainer>
                {columns.map((posts, i) => (
                    <Column key={i} posts={posts} />
                ))}
            </ColumnsContainer>
            {loading ? <LoadingContainer><LoadingIcon /></LoadingContainer>: null}
        </Container>
    );
}


const ColumnsContainer = styled.div`
    width: 100%;
    /* Flex */
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const Container = styled.div`
    --COLUMN-WIDTH: 18rem;
    --IMAGE-MARGIN: 0.5rem;

    height: var(--PAGE-HEIGHT);
    overflow-y: auto;

    display: flex;
    flex-flow: nowrap column;
    align-items: center;
`;

const LoadingContainer = styled.div`
    margin-bottom: 2rem;
`;
