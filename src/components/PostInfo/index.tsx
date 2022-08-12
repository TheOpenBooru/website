import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Posts } from "js/booru";
import PostEdit from "components/PostEdit";
import Info from "./Info";
import TagList from "./TagList";
import Buttons from "./Buttons";
import Source from "./Source";

PostInfo.propTypes = {
    reloadCallback: PropTypes.func,
};
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
                    ? <PostEdit key={post.id} post={post}/>
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
    display: flex;
    flex-flow: row nowrap;
    align-items: flex-start;
    justify-content: space-between;
`;

