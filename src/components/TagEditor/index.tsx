import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TagInput from "./TagInput";
import TagList from "./TagList";

TagEditor.propTypes = {
    baseTags: PropTypes.arrayOf(PropTypes.string),
    setTags: PropTypes.func,
};
export default function TagEditor({ baseTags, setTags }) {
    let [addedTags, setAddedTags] = useState([]);
    let [removedTags, setRemovedTags] = useState([]);

    function addTag(tag) {
        if (baseTags.includes(tag)) return;
        if (addedTags.includes(tag)) return;
        setAddedTags(addedTags.concat(tag));
    }

    useEffect(() => {
        let tags = [];
        tags = tags.concat(baseTags);
        tags = tags.filter((tag) => !removedTags.includes(tag));
        tags = tags.concat(addedTags);
        setTags(tags);
    }, [setTags, baseTags, addedTags, removedTags]);

    return (
        <Container>
            <TagInput addTagCallback={addTag} />
            <TagList
                {...{ baseTags, setTags, addedTags, setAddedTags, removedTags, setRemovedTags }}
            />
        </Container>
    );
}

const Container = styled.div`
    height: 12rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;
