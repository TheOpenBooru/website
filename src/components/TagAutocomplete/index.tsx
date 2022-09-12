import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import Tag from "./Tag";
import { Tags } from "js/booru";
import useSWR from "swr";

interface Props{
    input: string,
    addTagCallback: Function,
}
export default React.memo(function AutoComplete({ input, addTagCallback }: Props) {
    let { data: tags } = useSWR(
        `autocomplete-${input}`,
        async () => await Tags.autocomplete(input, 8),
    )

    function clickCallback(tag: String) {
        return () => {
            addTagCallback(tag);
        };
    }

    if (!tags || tags.length === 0) {
        return null
    } else {
        return (
            <Container>
                {tags.map((tag) => <Tag key={tag.name} tag={tag} callback={clickCallback(tag.name)} />)}
            </Container>
        );
    }
})


const Container = styled.div`
    min-width: 8em;
    height: fit-content;
    gap: 0.1rem;
    padding: 0.2rem;

    background: var(--BACKGROUND-3);
    border: 0.2rem solid var(--BORDER-1);
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    align-items: baseline;
`;
