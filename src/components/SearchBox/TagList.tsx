import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Tag from "components/Tag";

export default function TagList({ includeTags, setIncludeTags, excludeTags, setExcludeTags }) {
    const removeTagCallback = (tag) => () => {
        if (includeTags.includes(tag)) {
            includeTags = includeTags.filter((t) => t !== tag);
            setIncludeTags(includeTags);
        } else {
            excludeTags = excludeTags.filter((t) => t !== tag);
            setExcludeTags(excludeTags);
        }
    }

    const toggleTagCallback = (tag) => () => {
        if (!includeTags.includes(tag)) {
            removeTagCallback(tag);
            setIncludeTags(includeTags.concat(tag));
        } else {
            removeTagCallback(tag);
            
            setExcludeTags(excludeTags.concat(tag));
        }
    }

    let allTags = includeTags.concat(excludeTags);
    return (
        <Container>
            {allTags.map((tag) => {
                return (
                    <TagContainer key={tag} active={includeTags.includes(tag)}>
                        <Tag tag={tag} callback={removeTagCallback(tag)}>
                            <RemoveTagImage
                                src="/images/cross.svg"
                                alt="Remove Tag"
                                onClick={toggleTagCallback(tag)}
                            />
                        </Tag>
                    </TagContainer>
                )
            })}
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    gap:.5rem;
    padding: .3rem;
    display: flex;

    flex-direction: column;
    align-items: baseline;
`;


const TagContainer = styled.div`
    ${({ active }) => !active && `
        font-style: italic;
        color: #8b0000;
    `}
`


const RemoveTagImage = styled.img`
    cursor: pointer;
    user-select: none;
    width: 1rem;
    height: 1rem;

    /* Change colour to red */
    filter: invert(13%) sepia(51%) saturate(6190%) hue-rotate(359deg) brightness(78%) contrast(118%);
`;
