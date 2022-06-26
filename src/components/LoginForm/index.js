import React, { useRef } from "react";
import styled from "styled-components";
import Redirects from "js/redirects";
import { Account } from "js/booru";


export default function LoginForm() {
    let usernameRef = useRef(null);
    let passwordRef = useRef(null);
    let errorRef = useRef(null);

    function _RetriveInput() {
        let username = usernameRef.current.value;
        usernameRef.current.value = "";
        let password = passwordRef.current.value;
        passwordRef.current.value = "";

        return { username, password };
    }

    function showError(msg) {
        errorRef.current.innerText = msg;
    }

    function LoginCallback(e) {
        (async () => {
            e.preventDefault();
            let { username, password } = _RetriveInput();
            try {
                await Account.login(username, password);
                Redirects.goto(Redirects.profile());
            } catch (error) {
                showError(error.message);
            }
        })()
    }
    
    function RegisterCallback(e) {
        (async () => {
            e.preventDefault();
            let { username, password } = _RetriveInput();
            try {
                await Account.register(username, password);
                await Account.login(username, password);
                Redirects.goto(Redirects.profile());
            } catch (e) {
                showError(e);
            }
        })();
    }


    return (
        <Container className="bordered">
            <div>
                <TextInput type="username" placeholder="Username" ref={usernameRef} />
                <br />
                <TextInput type="password" placeholder="Password" ref={passwordRef} />
            </div>
            <ButtonContainer>
                <Button type="submit" value="Login" onClick={LoginCallback} />
                <Button type="submit" value="Register" onClick={RegisterCallback} />
            </ButtonContainer>
            <ErrorText ref={errorRef}/>
        </Container>
    )
}

const Container = styled.div`
    padding: .5rem;
    width: min(20rem,50vw);
    border-radius: 1rem;
`


const TextInput = styled.input`
    width: calc(100% - .5rem);
`

const Button = styled.input`
    width: 100%;
    font-weight: bold;

`

const ButtonContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`

const ErrorText = styled.div`
    text-align:center;
    font-size:medium;
`
