import React, { useRef } from "react";
import styled from "styled-components";
import Redirects from "js/redirects";
import { Account } from "js/booru";
import HCaptcha from '@hcaptcha/react-hcaptcha';


export default function LoginForm() {
    let errorRef = useRef(null);

    function showError(err) {
        console.log(err)
        let text;
        if (err === Account.LoginFailure) {
            text = "Invalid Username or Passowrd"
        } else if (err === Account.PasswordReset) {
            text = "Your password was reset"
        } else if (err === Account.WrongAPIVersion) {
            text = "Wrong API Version"
        } else if (err === Account.RateLimited) {
            text = "Your being ratelimited, please wait"
        } else if (err === Account.BadPasswordRequirements) {
            text = "Your Password Does Not Meet the Requirements"
        } else if (err === Account.UserAlreadyExists) {
            text = "Use with that name already exists"
        } else {
            text = "An Unknown Error Occured"
        }
        errorRef.current.innerText = text;
    }

    async function HandleLogin(username,password) {
        try {
            if (username === "" && password === "") {
                throw new Error("")
                
            }
            await Account.login(username, password);
            Redirects.goto(Redirects.home());
        } catch (err) {
            showError(err);
        }
    }
    
    async function HandleRegister(username,password) {
        try {
            await Account.register(username, password);
            await Account.login(username, password);
            Redirects.goto(Redirects.home());
        } catch (err) {
            showError(err);
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
    border: 3px solid var(--COLOR-4) ;
    background-color: var(--COLOR-2);
    transition: 0.15s ease-out;

    width: min(20rem,50vw);
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
    border-radius: .5rem;

    background-color: var(--COLOR-1);
    border-color: var(--COLOR-3);
    color: black;
    
    width: calc(100% - 1.5rem);
    &::placeholder{
        opacity:0.8;
        color:black;
    }
`


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

    background-color: var(--COLOR-3);
    border-color: var(--COLOR-4);
`


const ErrorText = styled.div`
    text-align:center;
    font-size:medium;
`