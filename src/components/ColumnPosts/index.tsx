import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import LoadingIcon from "components/LoadingIcon";
import useWidth from "hooks/widthHook";
import { Types } from "openbooru";
import { SplitPosts } from "./utils";
import Item from "./item";
import { Post } from "openbooru/lib/types";


const Clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));
type ColumnProps = {
    loading: boolean,
    finished: boolean,
    posts: Array<Post>,
    index: number,
    query: Types.PostQuery,
    setQuery: Function,
    postCallback: Function,
    morePostsCallback: Function,
};

export default React.memo(function ColumnPosts({ posts, loading, morePostsCallback, postCallback, index }: ColumnProps) {
    let width = useWidth();
    let ref = useRef();
    let [columns, setColumns] = useState([]);

    useEffect(() => {
        if (width == null) {
            setColumns([]);
        } else {
            let increments = Number((width / 450).toFixed());
            let columnCount = Clamp(increments, 2, 8);
            let postColumns = SplitPosts(posts, columnCount);
            setColumns(postColumns);
        }
    }, [width, posts]);
    

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


    let focusPostID = posts[index]?.id;
    
    const getIndex = (id: number): number => {
        let index = posts.findIndex((post) => post.id === id);
        return index;
    }

    return (
        <Container ref={ref}>
            <Columns>
                {columns.map((posts, index) => (
                    <ColumnContainer key={index}>
                        {posts.map((post, index) => 
                            <Item
                                key={post.id}
                                index={getIndex(post.id)}
                                post={post}
                                postCallback={postCallback}
                                priority={index < 5}
                                parentRef={ref}
                                isTarget={focusPostID === post.id}
                            />
                        )}
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
});

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
    --IMAGE-WIDTH: 300px;
    --IMAGE-MARGIN: 8px;

    width: var(--IMAGE-WIDTH);
    margin: var(--IMAGE-MARGIN);

    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LoadingContainer = styled.div`
    display: flex;
    align-items:center;
    justify-content: center;

    margin-bottom: 2rem;
`;
