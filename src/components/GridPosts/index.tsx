import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import LoadingIcon from "components/LoadingIcon";
import Item from "./item";
import { Post, PostQuery } from "openbooru/lib/types";

interface Props {
    loading: boolean,
    finished: boolean,
    posts: Post[],
    index: number,
    query: PostQuery,
    setQuery: Function,
    postCallback: Function,
    morePostsCallback: Function,
};
export default React.memo(function GridPosts({ posts, morePostsCallback, loading, postCallback, index }: Props) {
    const scrollRef = useRef();
    useEffect(() => {
        const interval = setInterval(() => {
            if (!scrollRef.current) return;
        
            const { scrollTop, offsetHeight, scrollHeight } = scrollRef.current;
            let distanceFromTop = scrollTop + offsetHeight;
            let distanceFromBottom = scrollHeight - distanceFromTop;
            if (distanceFromBottom < 2000) {
                morePostsCallback();
            }
        }, 100)
        
        return () => clearInterval(interval);
    }, [morePostsCallback])

    return (
        <Container ref={scrollRef}>
            <Grid>
                {posts.map((post, i) => (
                    <Item
                        key={post.id}
                        post={post}
                        callback={postCallback({id: post.id, index:i})}
                        isTarget={i === index}
                        parentRef={scrollRef}
                    />
                ))}
            </Grid>
            {loading ? (
                <LoadingContainer>
                    <LoadingIcon fadeIn />
                </LoadingContainer>
            ) : null}
        </Container>
    );
})

const Container = styled.div`
    --IMAGE-SIZE: 192px;

    /* Position */
    max-width: 100vw;
    max-height: var(--PAGE-HEIGHT);
    overflow-y: auto;
    overflow-x: hidden;
`;

const Grid = styled.div`
    overflow-x: hidden;

    padding: 2rem 10vw 2rem 10vw;

    /* Grid */
    display: grid;
    align-items: center;
    justify-items: center;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(min(calc(40vw - 2rem), var(--IMAGE-SIZE)), 1fr));
`;

const LoadingContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
`;
