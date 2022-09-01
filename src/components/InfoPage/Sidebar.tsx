import React from "react";
import styled from "styled-components";

export default function SideBar({ options, currentOption, callback }) {
    return (
        <Container>
            {options.map((name:string) => <Option
                text={name}
                key={name}
                active={currentOption === name}
                callback={() => callback(name)}
            />)}
        </Container>
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
    height: var(--PAGE-HEIGHT);
    background-color: var(--BACKGROUND-2);

    display: flex;
    justify-content: center;
    align-content: center;
    flex-flow: nowrap column;
`;


const OptionSpan = styled.span`
    width: 100%;
    font-size: 1.6rem;

    display: inline;
    position: relative;
    margin-left: 1rem;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
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