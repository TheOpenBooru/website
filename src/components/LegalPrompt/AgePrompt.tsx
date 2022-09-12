import React from "react";
import styled from "styled-components";
import MessageBox from "components/MessageBox";
import useAgeConfirm from "hooks/ageHook";
import useCookieConsent from "hooks/cookieHook";

export default function AgePrompt() {
    let { isOver18, confirm } = useAgeConfirm();
    let { hasConsented, accept } = useCookieConsent();

    function AcceptAll() {
        confirm();
        accept();
    }

    if (isOver18 && hasConsented) {
        return null
    } else {
        return (
            <MessageBox style={{backgroundColor: "rgba(0,0,0,0.995)"}}>
                <Container>
                    <AgeText>
                        The website requires you to be over the Age of 18
                    </AgeText>
                    <br/>
                    <ConfirmButton onClick={AcceptAll}>
                        I Am Older Than 18 Years Old
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
    width: 12rem;
`

const AgeText = styled.span`
    text-align: center;
`