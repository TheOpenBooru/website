import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

TagList.propTypes = {
    baseTags: PropTypes.arrayOf(PropTypes.string),
    addedTags: PropTypes.arrayOf(PropTypes.string),
    setAddedTags: PropTypes.func,
    removedTags: PropTypes.arrayOf(PropTypes.string),
    setRemovedTags: PropTypes.func,
};
export default function TagList({
    baseTags,
    addedTags,
    setAddedTags,
    removedTags,
    setRemovedTags,
}) {
    const restoreTagCallback = (tag) => () => {
        let newRemovedTags = removedTags.filter((v) => v !== tag);
        setRemovedTags(newRemovedTags);
    };

    const removedTagCallback = (tag) => () => {
        setRemovedTags(removedTags.concat(tag));
    };

    const removeAddedTagCallback = (tag) => () => {
        setAddedTags(addedTags.filter((v) => v !== tag));
    };

    return (
        <Container>
            {baseTags.map((tag) => {
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

            {addedTags.map((tag) => (
                <AddedTag key={tag} onClick={removeAddedTagCallback(tag)}>
                    {tag}
                </AddedTag>
            ))}
        </Container>
    );
}

const Container = styled.div`
    height: 11rem;
    overflow-y: auto;

    border: 0.2rem var(--BORDER-1) solid;
    border-radius: 0.2rem;
    background: var(--BACKGROUND-2);

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: baseline;
`;

const BaseTag = styled.div`
    width: fit-content;
    padding: 0.1rem;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    margin: 0.1rem;

    cursor: pointer;
    user-select: none;
    border-radius: 1rem;
    border-width: 0.1rem;
    border-style: solid;

    display: flex;
    flex-flow: nowrap row;
    align-items: center;
    justify-content: center;

    background: var(--BACKGROUND-3);
    border-color: var(--BORDER-1);
`;

const NormalTag = styled(BaseTag)``;

const RemovedTag = styled(BaseTag)`
    opacity: 0.5;
`;

const AddedTag = styled(BaseTag)`
    background: var(--BACKGROUND-4);
    border-color: var(--BORDER-2);
`;
