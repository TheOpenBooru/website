import React, { useState } from "react";
import styled from "styled-components";

export default function SourceInput(props) {
    let { source, setSource } = props;
    let [valid, setValid] = useState(true);
    let [tempSource, setTempSource] = useState(source);

    const URL_REGEX = new RegExp(
        "http[s]?://(?:[a-zA-Z]|[0-9]|[$-_@.&+]|[!*(),]|(?:%[0-9a-fA-F][0-9a-fA-F]))+",
    );
    function validateSource(value) {
        return URL_REGEX.test(value);
    }

    function onChangeHandler(e) {
        let value = e.target.value;
        setTempSource(value);
        setValid(validateSource(value));

        if (valid) {
            setSource(value);
            e.target.classList.remove("invalid");
            e.target.classList.add("valid");
        } else {
            e.target.classList.remove("valid");
            e.target.classList.add("invalid");
        }
    }

    return (
        <div>
            <label htmlFor="source">Source:</label>
            <InputField
                type="text"
                name="source"
                className={valid ? null : "invalid"}
                value={tempSource}
                onChange={onChangeHandler}
            />
        </div>
    );
}

const InputField = styled.input`
    width: 20rem;
    &.invalid {
        border-color: red;
        filter: opacity(0.7);
    }
`;
