import React from "react";
import styled from "styled-components";

export default function TagList(props) {
    let { tags } = props;
    tags ||= [];
    tags = tags.sort();
    return (
        <Container>
            {tags.map(tag => <Tag key={tag}>{tag}</Tag>)}
        </Container>
    );
}


const Container = styled.div`
    position: relative;
    width: 100%;
    padding: .5rem;

    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    gap: .5rem;
`


const Tag = styled.span`
    cursor: pointer;
    user-select: none;
    width: fit-content;

    border: .1rem solid var(--BORDER-2);
    border-radius: 1rem;
    background-color: var(--BACKGROUND-4);

    padding: 0 .3rem 0 .3rem;
`
