import React, { useState } from "react";
import styled from "styled-components";
import HeadInfo from "components/HeadInfo";
import About from "components/About";
import ContactUs from "components/ContactUs";
import GDPR from "components/GDPR";


export default function Info() {
    let [mode, setMode] = useState("About");
    let options = {
        "About": About,
        "GDPR": GDPR,
        "Contact US": ContactUs,
    };
    let MainElement = options[mode] || About
    return (
        <>
            <HeadInfo title="Info" />
            <Container>
                <Options options={Object.entries(options)} currentOption={mode} callback={setMode} />
                <MainContainer>
                    <MainElement key={mode} />
                </MainContainer>
            </Container>
        </>
    );
}


function Options({ options, currentOption, callback }) {
    return (
        <OptionsContainer>
            {options.map(([name, _]) =>
                <Option
                    key={name}
                    text={name}
                    active={currentOption === name}
                    callback={() => callback(name)}
                />
            )}
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


const Container = styled.div`
    display: grid;
    grid-template-columns: 10rem 1fr;
`;


const MainContainer = styled.div`
    padding: .5rem;
`;


const OptionsContainer = styled.div`
    width: 100%;
    height: var(--PAGE-HEIGHT);
    background-color: var(--BACKGROUND-2);

    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: nowrap column;
`;


const OptionSpan = styled.span`
    margin-left: 1rem;
    font-size: 1.6rem;
    user-select: none;
    white-space: none;
`;


const ActiveOptionSpan = styled(OptionSpan)`
    color:#7d7d7d;
`;


const InactiveOptionSpan = styled(OptionSpan)`
    cursor: pointer;
    &:hover {
        transition: 150ms all ease-in-out;
        color: #4e4e4e;
    }
`;
