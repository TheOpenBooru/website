import React from "react";
import styled from "styled-components";
import HeadInfo from "components/HeadInfo";

export default function Info() {
    return (
        <React.Fragment>
            <HeadInfo title="Open Booru: Info" />
            <Options option={""} />
        </React.Fragment>
    );
}

function Options({ option, optionCallback }) {
    return (
        <OptionsContainer>
            <Option text="API" />
            <Option text="About" />
            <Option text="Contact Us" active />
        </OptionsContainer>
    );
}

function Option({ text, active = false }) {
    return <OptionContainer>{text}</OptionContainer>;
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

const OptionContainer = styled.a`
    font-size: 1.6rem;

    transition: 100ms all ease-in-out;
    &:hover {
        color: grey;
    }
`;

const ActiveOptionContainer = styled(OptionContainer)``;
