import React, { useState, Suspense, lazy } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Posts } from "js/booru";
import Info from "./Info";
import TagList from "./TagList";
import Buttons from "./Buttons";
import Source from "./Source";

const PostEdit = lazy(() => import('components/PostEdit'));

export default function PostInfo({ post }) {
    let [editting, setEditting] = useState(false);
    const toggleEditting = () => setEditting(!editting);
    const deleteCallback = async () => {
        await Posts.Delete(post.id);
        window.location.reload();
    }
    
    return (
        <Container>
            <SourceContainer>
                <Source source={post.source} />
            </SourceContainer>
            <InnerContainer>
                <Info post={post}/>
                {editting
                    ? <Suspense>
                        <PostEdit key={post.id} post={post}/>
                    </Suspense>
                    : <TagList tags={post.tags} />
                }
                <Buttons editCallback={toggleEditting} deleteCallback={deleteCallback} />
            </InnerContainer>
        </Container>
    );
}

const Container = styled.div`
    /* Position */
    position: relative;
    min-height: 14rem;
    background-color: var(--BACKGROUND-3);
`;

const SourceContainer = styled.div`
    margin-right: 2rem;
    margin-left: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const InnerContainer = styled.div`
    @media (max-width: 30rem) {
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
    }
    display: grid;
    grid-template-columns: 12rem 1fr 4rem;
    padding-bottom: 1rem;
`;

