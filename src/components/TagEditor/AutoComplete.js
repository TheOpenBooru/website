import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Autocomplete from "./AutoComplete";
import { Tags } from "js/booru";

AutoComplete.propTypes = {
    input: PropTypes.string,
    addTagCallback: PropTypes.func,
}
export default function AutoComplete({ input, addTagCallback }) {
    let [tags, setTags] = useState([]);

    useEffect(() => {
        async function recalculateTags() {
            if (input === "") {
                setTags([]);
            } else {
                let tags = await Tags.autocomplete(input, 4);
                setTags(tags);
            }
        }
        recalculateTags();
    }, [input]);

    const clickCallback = (tag: String) => () => {
        setTags([]);
        addTagCallback(tag);
    };
    
    if (tags.length === 0) {
        return null
    } else {
        return (
            <Container>
                {tags.map((tag) => (
                    <Tag key={tag.name} onClick={clickCallback(tag.name)}>
                        {tag.name}
                    </Tag>
                ))}
            </Container>
        );
    }
}

const Container = styled.div`
    position: absolute;
    bottom: 3.5em;
    left: 11.5rem;
    min-width: 10rem;
    height: fit-content;
    gap: 0.2rem;
    padding: 0.3rem;

    background: var(--BACKGROUND-3);
    border: 0.2rem solid var(--BORDER-1);
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    align-items: baseline;
`;

const Tag = styled.div`
    cursor: pointer;

    width: fit-content;
    padding: 0.2rem;

    background-color: var(--BACKGROUND-4);
    border-radius: 1rem;
    border: 0.2rem solid var(--BORDER-1);
`;
