import React, { useState } from "react";
import styled from "styled-components";
import Tag from "components/Tag";
import TagAutocomplete from "components/TagAutocomplete";

export default function TagSearch({
        includeTags = [] as string[],
        setIncludeTags,
    }) {
    let [ text, setText ] = useState("");
    
    function addTagCallback(tag) {
        setText("");
        if (tag && !includeTags.includes(tag)) {
            setIncludeTags(includeTags.concat(tag));
        }
    }


    function keyPressHandler(e) {
        if (e.key !== "Enter") return;
        addTagCallback(text);
    }

    function NormaliseText(text: string): string{
        return text
            .replace(' ', '_')
            .toLowerCase()
            .split('')
            .filter(char => /[_()a-z0-9]/.test(char))
            .join('')
    }


    function onInput(e) {
        let text = e.target.value;
        text = NormaliseText(text)
        setText(text);
    }


    return (
        <>
            <SearchInput
                type="search"
                value={text}
                onKeyDownCapture={keyPressHandler}
                onChange={onInput}
            />
            <AutoCompleteContainer>
                <TagAutocomplete input={text} addTagCallback={addTagCallback} />
            </AutoCompleteContainer>
        </>
    );
}


const SearchInput = styled.input`
    width:100%;
    border-radius: .5rem;
    justify-self: flex-start;
`


const AutoCompleteContainer = styled.div`
    z-index: 1;
    position: absolute;
    top: 2.5rem;
    left: 9rem;
`
