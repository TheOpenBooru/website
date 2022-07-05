import React, { useRef } from "react";
import styled from "styled-components";
import Redirects from "js/redirects";
import { Account } from "js/booru";
import HCaptcha from '@hcaptcha/react-hcaptcha';


export default function LoginForm() {
    let errorRef = useRef(null);

    function parseError(err) {
        let text;
        if (err === Account.LoginFailure) {
            text = "Invalid Username or Password"
        } else if (err === Account.PasswordReset) {
            text = "Your password was reset"
        } else if (err === Account.WrongAPIVersion) {
            text = "The API is the wrong version"
        } else if (err === Account.RateLimited) {
            text = "Your being ratelimited, please wait"
        } else if (err === Account.BadPasswordRequirements) {
            text = "Your Password Does Not Meet the Requirements"
        } else if (err === Account.UserAlreadyExists) {
            text = "Use with that name already exists"
        } else {
            text = "An Unknown Error Occured"
        }
        showText(text);
    }

    function showText(text) {
        errorRef.current.innerText = text;
    }
    
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
        handleInput(username,password)
        
        try {
            await Account.login(username, password);
            Redirects.goto(Redirects.home());
        } catch (err) {
            parseError(err);
        }
    }
    
    async function HandleRegister(username,password) {
        handleInput(username,password)

        try {
            await Account.register(username, password);
            await Account.login(username, password);
            Redirects.goto(Redirects.home());
        } catch (err) {
            parseError(err);
        }
    }


    function FormCallback(e) {
        e.preventDefault();
        let elements = e.target.elements;
        let [UsernameElm, PasswordElm, LoginElm, RegisterElm] = elements
        
        let username = UsernameElm.value;
        let password = PasswordElm.value;
        UsernameElm.value = "";
        PasswordElm.value = "";
        
        if (LoginElm["data-clicked"]) {
            LoginElm["data-clicked"] = false;
            HandleLogin(username,password)
        } else if (RegisterElm["data-clicked"]) {
            RegisterElm["data-clicked"] = false;
            HandleRegister(username,password)
        }
    }

    return (
        <ContainerForm onSubmit={FormCallback}>
            <InputsContainer>
                <InputText type="username" placeholder="Username" />
                <InputText type="password" placeholder="Password" />
            </InputsContainer>
            <ButtonsContainer>
                <SubmitButton type="submit" value="Login" onClick={(e) => e.target["data-clicked"] = true}/>
                <SubmitButton type="submit" value="Register" onClick={(e) => e.target["data-clicked"] = true}/>
            </ButtonsContainer>
            <ErrorText ref={errorRef}/>
        </ContainerForm>
    )
}

const ContainerForm = styled.form`
    border: 3px solid var(--BORDER-1) ;
    background-color: var(--BACKGROUND-3);
    transition: 0.15s ease-out;

    width: min(20rem,50vw);
    min-width: 16rem;
    border-radius: 1rem;
    padding:1rem;
`


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


const ButtonsContainer = styled.div`
    margin-top: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const SubmitButton = styled.input`
    border-radius: 1rem;
    
    height: 2rem;
    width: 40%;
    font-size: large;
    font-weight: bold;

    background-color: var(--BACKGROUND-4);
    border-color: var(--BORDER-1);
`


const ErrorText = styled.div`
    text-align:center;
    font-size:medium;
`