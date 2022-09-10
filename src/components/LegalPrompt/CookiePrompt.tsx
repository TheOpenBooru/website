import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MessageBox from "components/MessageBox";
import useCookieConsent from "hooks/cookieHook";
import Link from "next/link";

export default function CookiePrompt() {
    let { accept, hasConsented } = useCookieConsent();

    if (hasConsented) {
        return null
    } else {
        return (
            <OverlayConatiner>
                <Container>
                    <AgeText>
                        Cookies are used for logins, settings and caching.
                        <br />
                        <br />
                        Do you agree to the use of cookies? 
                    </AgeText>
                    <br/>
                    <ConfirmButton onClick={() => accept()}>
                        Accept Cookies
                    </ConfirmButton>
                </Container>
            </OverlayConatiner>
        )
    }
}

const OverlayConatiner = styled.div`
    z-index: 5;
    position: absolute;
    height: 100vh;
    width: 100vw;
    left:0;

    display: flex;
    justify-content: center;
    align-items: center;
    transition: .05s ease-out;

    background-color: rgba(0,0,0,0.99);
`

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