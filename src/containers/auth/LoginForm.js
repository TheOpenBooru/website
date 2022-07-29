import React, { useRef } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Redirects from "js/redirects";
import { Account } from "js/booru";
import HCaptcha from '@hcaptcha/react-hcaptcha';

LoginForm.propTypes = {
    errorHandler:PropTypes.func,
    showText:PropTypes.func,
}
export default function LoginForm({errorHandler,showText}) {
    function handleInput(username, password) {
        if (username === "" || password === "") {
            if (username === "" && password === "") {
                showText("Please enter a username and password")
            } else if (username === "") {
                showText("Please enter a username")
            } else if (password === "") {
                showText("Please enter a password")
            }
            throw new Error()
        }
    }
    
    async function HandleLogin(username, password) {
        handleInput(username, password)
        try {
            await Account.login(username, password);
            Redirects.goto(Redirects.home());
        } catch (err) {
            errorHandler(err);
        }
    }

    function FormCallback(e) {
        e.preventDefault();
        let [UsernameElm, PasswordElm] = e.target.elements;
        
        let username = UsernameElm.value;
        UsernameElm.value = "";
        let password = PasswordElm.value;
        PasswordElm.value = "";
        
        HandleLogin(username,password)
    }

    return (
        <form onSubmit={FormCallback}>
            <InputsContainer>
                <InputText type="username" placeholder="Username" />
                <InputText type="password" placeholder="Password" />
            </InputsContainer>
            <LoginButton type="submit" value="Login"/>
        </form>
    )
}


const InputsContainer = styled.div`
    display:flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    gap:.2rem;
`


const InputText = styled.input`
    font-size: larger;
    border-radius: 0.5rem;

    background-color: var(--BACKGROUND-2);
    border-color: var(--BACKGROUND-4);
    color: black;

    width: calc(100% - 1.5rem);
    &::placeholder {
        opacity: 0.8;
        color: black;
    }
`;


const LoginButton = styled.input`
    height: 2rem;
    width: 100%;
    margin-top:1rem;
    
    border-radius: 1rem;
    font-size: large;
    font-weight: bold;

    background-color: var(--BACKGROUND-4);
    border-color: var(--BORDER-1);
`
