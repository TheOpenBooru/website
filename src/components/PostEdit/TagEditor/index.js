import React, { useState } from "react";
import styled, { css } from "styled-components";
import TagInput from "./TagInput";

export default function TagEditor(props) {
    let { tags, setTags } = props;

    let [ baseTags, setBaseTags ] = useState(tags);
    let [ removedTags, setRemovedTags ] = useState(["social_media"]);
    let [ addedTags, setAddedTags ] = useState(["test"]);

    const restoreTagCallback = (tag) => () => {
        let newRemovedTags = removedTags.filter((v) => v !== tag);
        setRemovedTags(newRemovedTags);
    };

    const removedTagCallback = (tag) => () => {
        setRemovedTags(removedTags.concat(tag));
    };

    
    return (
        <div>
            <TagList>
                {tags.map((tag) => {
                    if (removedTags.includes(tag)) {
                        return (
                            <RemovedTag key={tag} onClick={restoreTagCallback(tag)}>
                                {tag}
                            </RemovedTag>
                        );
                    } else {
                        return (
                            <NormalTag key={tag} onClick={removedTagCallback(tag)}>
                                {tag}
                            </NormalTag>
                        );
                    }
                })}
                {addedTags.map(tag => <AddedTag key={tag}>{tag}</AddedTag>)}
            </TagList>
            <br />
            <TagInput addTagCallback={(tag) => {setAddedTags(addedTags.concat(tag))}} />
        </div>
    );
}


const TagList = styled.div`
    height: 8rem;
    overflow-y: auto;

    border: .2rem var(--BORDER-1) solid;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: baseline;
`;


const BaseTag = css`
    width: fit-content;
    padding: 0.1rem;
    margin: 0.1rem;

    user-select: none;
    border-radius: 1rem;
    border: var(--BORDER-1) 0.1rem solid;
    background-color: var(--BACKGROUND-4);

    display: flex;
    flex-flow: nowrap row;
    align-items: center;
    justify-content: center;
`;


const NormalTag = styled.div`
    ${BaseTag}
    cursor: pointer;
`;


const AddedTag = styled.div`
    ${BaseTag}
    background-color: blue;
    background-color: var(--BORDER-1);
`;


const RemovedTag = styled.div`
    ${BaseTag}
    background-color: var(--BACKGROUND-4-HOVER);
`;
