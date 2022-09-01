import React from "react"
import styled from "styled-components"


type CookieConsentProps = {
    callback: Function
}
export default function CookieConsent({ callback }:CookieConsentProps) {
    const AcceptCallback = () => callback(true)
    const DeclineCallback = () => callback(false)
    return (
        <Container>
            <Text>
                Can We Track You?
            </Text>
            <ButtonContainer>
                <AcceptButton onClick={AcceptCallback}>Yes</AcceptButton>
                <DeclineButton onClick={DeclineCallback}>No</DeclineButton>
            </ButtonContainer>
        </Container>
    )
}


const Container = styled.div`
    width: fit-content;
    background: var(--BACKGROUND-3);
    padding: 1rem;
    border: .15rem var(--BORDER-1) solid;
    border-radius: .5rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Text = styled.span`
`

const ButtonContainer = styled.div`
    display: flex;
    gap:.5rem;
    align-items: center;
    justify-content: center;
`

const Button = styled.button`
    width: 3rem;
    border: .1rem var(--BORDER-2) solid;
    border-radius: 1rem;
    
    cursor: pointer;
    user-select: none;
    transition: 100ms ease-in all;
    &:hover {
        border-radius: .5rem;
        filter: saturate(150%);
    }
`

const AcceptButton = styled(Button)`
    background: green;
`

const DeclineButton = styled(Button)`
    background: red;
`