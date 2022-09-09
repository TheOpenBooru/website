import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MessageBox from "components/MessageBox";
import useCookieConsent from "hooks/cookieHook";

export default function CookiePrompt() {
    let { accept, hasConsented } = useCookieConsent();

    if (hasConsented) {
        return null
    } else {
        return (
            <MessageBox style={{backgroundColor: "rgba(0,0,0,0.995)"}}>
                <Container>
                    <AgeText>
                        Do you wish to accept the use of cookies?
                        <br />
                        These are required for the site to run.
                    </AgeText>
                    <br/>
                    <ConfirmButton onClick={() => accept()}>
                        Accept Cookies
                    </ConfirmButton>
                </Container>
            </MessageBox>
        )
    }
}

const Container = styled.div`
    /* Position */
    padding: 1rem;
    width: fit-content;
    max-width: 25em;
    height: fit-content;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: .5rem;
    
    /* Look */
    background-color: var(--BACKGROUND-3);
    border: .2em solid var(--BORDER-1);
    border-radius: 1rem;
`

const ConfirmButton = styled.button`
    width: 7rem;
`

const AgeText = styled.span`
    text-align: center;
`