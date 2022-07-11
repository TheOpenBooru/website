import React, { useState } from "react";
import styled from "styled-components";
import Booru from "js/booru";


export default function TagInput(props) {
    let { addTagCallback } = props;
    let [ tagSearch, setTagSearch ] = useState("");
    let [ previewTags, setPreviewTags ] = useState([]);

    function onInputChange(e) {
        (async () => {
            setTagSearch(e.target.value)
            if (tagSearch === "") {
                setPreviewTags([])
            } else {
                let query = new Booru.Types.TagQuery()
                query.name_like = tagSearch
                let tags = await Booru.Tags.search(query)
                setPreviewTags(tags)
            }
        })()
    }

    return (
        <ButtonContainer>
            <TagSearchInput type="text" value={tagSearch} onChange={onInputChange} />
            <TagAddButton>Add</TagAddButton>

        </ButtonContainer>
    )
}


const ButtonContainer = styled.div`
    height: 1.5rem;
    display: flex;
    flex-direction: row;
`


const TagSearchInput = styled.input`
    width: 100%;
    margin-right: 2rem;
`


const TagAddButton = styled.button`
    width: 4rem;
`
