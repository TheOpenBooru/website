import React from "react";
import styled from "styled-components";
import Core from "containers/core";
import MessageBox from "components/MessageBox";
import LoginForm from "components/LoginForm";
import SettingsEditor from "./settings";
import Redirects from "js/redirects";
import { Account } from "js/booru";

export default function Profile(props) {
    function logOut() {
        Account.logout();
        Redirects.goto(Redirects.auth);
    }
    function logIn() {
        Redirects.goto(Redirects.auth)
    }

    
    
    return (
        <Core title={"Open Booru: Profile"} description={`Open Booru Profile Page`}>
            <Container>
                <MessageBox>
                    <LoginForm/>
                </MessageBox>
                {Account.loggedIn
                    ? <LogoutButton onClick={logOut}>Logout</LogoutButton>
                    : <LogoutButton onClick={logIn}>Login</LogoutButton>
                }
                <SettingsEditor/>
            </Container>
        </Core>
    );
}


const LogoutButton = styled.button`
    position:absolute;
    right:0;
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