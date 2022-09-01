import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tag from "components/Tag";

export default function AutocompleteTag({ tag, callback }) {
    return (
        <TagButton key={tag} onInput={callback} onClick={callback}>
            <Tag tag={tag.name} data={tag} showCount/>
        </TagButton>
    )
}

const TagButton = styled.button`
    border: none;
    background: none;
`;
