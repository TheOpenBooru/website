import React, { useState } from "react";
import styled from "styled-components";
import HeadInfo from "components/HeadInfo";

const Example = () => <div />


export default function Info() {
    let [mode, setMode] = useState();
    let options = {
        "About": Example,
        "Contact US": Example,
    };
    return (
        <React.Fragment>
            <HeadInfo title="Open Booru: Info" />
            <Options options={Object.entries(options)} currentOption={mode} callback={setMode}/>
        </React.Fragment>
    );
}


function Options({ options, currentOption, callback }) {
    return (
        <OptionsContainer>
            {options.map((name:string) => <Option
                text={name}
                key={name}
                active={currentOption === name}
                callback={() => callback(name)}
            />)}
        </OptionsContainer>
    );
}


function Option({ text, callback, active }) {
    if (active) {
        return (
            <ActiveOptionSpan>
                {text}
            </ActiveOptionSpan>
        )
    } else {
        return (
            <InactiveOptionSpan  onClick={callback}>
                {text}
            </InactiveOptionSpan>
        );
    }
}


const OptionsContainer = styled.div`
    height: var(--PAGE-HEIGHT);
    width: 10rem;
    background-color: var(--BACKGROUND-2);

    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: nowrap column;
`;


const OptionSpan = styled.span`
    font-size: 1.6rem;
    user-select: none;
    `;


const ActiveOptionSpan = styled(OptionSpan)`
    color:#7d7d7d;
`;


const InactiveOptionSpan = styled(OptionSpan)`
    transition: 150ms all ease-in-out;
    cursor: pointer;
    &:hover {
        color: #4e4e4e;
    }
`;
