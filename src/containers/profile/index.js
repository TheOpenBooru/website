import React, { useRef } from "react";
import styled from "styled-components";
import Core from "containers/core";
import MessageBox from "components/MessageBox";
import LoginForm from "./LoginForm";
import SettingsEditor from "./settings";
import Redirects from "js/redirects";
import { Account } from "js/booru";

export default function Profile(props) {
    let LoginRef = useRef();
    function logOut() {
        Account.logout();
        Redirects.goto(Redirects.home)
    }
    function logIn() {
        toggleLoginBox();
    }


    function toggleLoginBox() {
        let elem = LoginRef.current;
        let isVisible = elem.style.display !== "none"
        elem.style.display = isVisible ? "none" : null
    }
    
    return (
        <Core title={"Open Booru: Profile"} description={`Open Booru Profile Page`}>
            <Container>
                {Account.loggedIn
                    ? <LogoutButton onClick={logOut}>Logout</LogoutButton>
                    : <LogoutButton onClick={logIn}>Login</LogoutButton>
                }
                <MessageBox ref={LoginRef} style={{display:"none"}}>
                    <LoginForm hide={toggleLoginBox} />
                </MessageBox>
                <SettingsEditor/>
            </Container>
        </Core>
    );
}


const LogoutButton = styled.button`
    position:absolute;
    left:0;
    height:2rem;
    width:6rem;
    border: var(--COLOR-4) .2em solid;
    background-color: var(--COLOR-2);
    border-radius: 1rem;
`

const Container = styled.div`
    height: 100%;
    width: 100%;
`