import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Redirects from "js/redirects";
import { Types, BSL } from "js/booru";

export default function TagList(props) {
    let { tags } = props;
    tags ||= [];
    tags = tags.sort();
    return (
        <Container>
            {tags.map((tag) => (
                <Tag key={tag} tag={tag} />
            ))}
        </Container>
    );
}

Tag.propTypes = { tag: PropTypes.string };
function Tag({ tag }) {
    let query = new Types.PostQuery();
    query.include_tags = [tag];
    let params = BSL.encode(query);
    let href = Redirects.search({ query: params });
    return <TagContainer href={href}>{tag}</TagContainer>;
}


const Container = styled.div`
    position: relative;
    height: 13rem;
    width: 100%;
    padding: 0.5rem;
    overflow-y: auto;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: baseline;
    gap: 0.5rem;
`;


const TagContainer = styled.a`
    display:block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    color: black;
    text-decoration: none;
    user-select: none;
    width: fit-content;

    border: 0.1rem solid var(--BORDER-2);
    border-radius: 1rem;
    background: var(--BACKGROUND-4);
    
    padding: 0 0.3rem 0 0.3rem;


    transition: ease-in all .2s;
    &:hover{
        border-color: var(--BORDER-2-HOVER);
        background: var(--BACKGROUND-4-HOVER);
    }
`;
