import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import AutoComplete from "./AutoComplete";

TagInput.propTypes = {
    addTagCallback: PropTypes.func,
};
export default function TagInput({ addTagCallback }) {
    let [input, setInput] = useState("");

    const VALID_CHARS = "abcdefghijklmnopqrstuvwxyz0123456789_()"
    function onInputChange(e) {
        let text = e.target.value;
        text = text.toLowerCase();
        text = text.replace(" ", "_");
        let characters = text.split("")
        characters = characters.filter((char) => VALID_CHARS.includes(char))
        text = characters.join("")
        setInput(text)
    }

    function submitEntry() {
        if (input === "") return;
        addTagCallback(input);
        setInput("");
    }

    function onKeyPress(e) {
        if (e.code === "Enter") {
            submitEntry();
        }
    }

    return (
        <Container>
            <TextInput type="text" value={input} onKeyDown={onKeyPress} onChange={onInputChange} />
            <Button onClick={submitEntry}>Add</Button>
            <AutoComplete input={input} addTagCallback={addTagCallback} />
        </Container>
    );
}

const Container = styled.div`
    height: 1.5rem;
    display: flex;
    flex-direction: row;
`;

const TextInput = styled.input`
    border: 0rem solid var(--BORDER-1);
    border-radius: 0.1rem;
    width: calc(100% - 4.5rem);
    margin-right: 0.5rem;
    `;

const Button = styled.button`
    width: 4rem;
    border-radius: 1rem;

    border: 0.1rem solid var(--BORDER-2);
    background: var(--BACKGROUND-4);
    transition: ease 0.2s;
    &:hover {
        border-color: var(--BORDER-2-HOVER);
        background: var(--BACKGROUND-4-HOVER);
    }
`;
