import React from "react";
import styled from "styled-components";
import PostInfo from "./PostInfo";
import TagList from "./TagList";
import PostEdit from "components/PostEdit";
import "./PostInfo.css";

export default function Info(props) {
    let { post } = props;
    let [editting, setEditting] = React.useState();

    return (
        <Container>
            <PostInfo post={post} />
            {editting ? <PostEdit post={post} /> : <TagList tags={post.tags} />}
            {/* <EditButton src="/images/edit.svg" onClick={() => setEditting(!editting)}/> */}
        </Container>
    );
}

const Container = styled.div`
    /* Position */
    position: relative;
    min-height: 14rem;

    background-color: var(--BACKGROUND-3);

    display: flex;
    flex-flow: row nowrap;
    align-items: baseline;
    padding-bottom: 1rem;
`;

const EditButton = styled.img`
    position: absolute;
    z-index: 1;
    width: 1.8rem;
    height: 1.8rem;
    right: 0.5rem;
    top: 0.5rem;
    padding: 0.2rem;

    cursor: pointer;
    background-color: var(--BACKGROUND-4);
    border-radius: 0.5rem;
    border: 0.2rem var(--BORDER-2) solid;
`;