import React, { useEffect, useRef } from "react";
import NoSSR from "react-no-ssr";
import styled from "styled-components";
import LoadingIcon from "components/LoadingIcon";
import useWidth from "hooks/widthHook";
import { Types } from "openbooru";
import { SplitPosts } from "./utils";
import Item from "./item";


const Clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
type ColumnProps = {
    loading: boolean,
    finished: boolean,
    posts: Array<Types.Post>,
    index: number,
    query: Types.PostQuery,
    setQuery: Function,
    postCallback: Function,
    morePostsCallback: Function,
};
export default function ColumnPosts({ posts, loading, morePostsCallback, postCallback, index }:ColumnProps) {
    let width = useWidth();
    let ref = useRef();

    useEffect(() => {
        const interval = setInterval(() => {
            if (!ref.current) return;
            
            const { scrollTop, offsetHeight, scrollHeight } = ref.current; 
            let distanceFromTop = scrollTop + offsetHeight;
            let distanceFromBottom = scrollHeight - distanceFromTop;
            if (distanceFromBottom < 4000) {
                morePostsCallback();
            }
        }, 100);
        return () => clearInterval(interval);
    }, [morePostsCallback])


    if (width === null) {
        return null
    } else {
        let focusPostID = posts[index]?.id;

        let increments = Number((width / 450).toFixed());
        let columnCount = Clamp(increments, 2, 8);
        let columns = SplitPosts(posts, columnCount);
        
        return (
            <Container ref={ref}>
                <Columns>
                    {columns.map((posts, index) => (
                        <ColumnContainer key={index}>
                            {posts.map((post, index) => (
                                <Item
                                    key={post.id}
                                    parentRef={ref}
                                    post={post}
                                    postCallback={postCallback}
                                    isTarget={focusPostID === post.id}
                                    priority={index < 5}
                                />
                            ))}
                        </ColumnContainer>
                    ))}
                </Columns>
                {loading ? (
                    <LoadingContainer>
                        <LoadingIcon fadeIn/>
                    </LoadingContainer>
                ) : null}
            </Container>
        );
    }
}

const Container = styled.div`
    height: calc(var(--PAGE-HEIGHT) - 3rem);
    padding-top: 3rem;
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
    display: flex;
    align-items:center;
    justify-content: center;

    margin-bottom: 2rem;
`;
