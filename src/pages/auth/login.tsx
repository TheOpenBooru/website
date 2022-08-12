import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import MessageBox from "components/MessageBox";
import { Account } from "js/booru";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Buttons from "./Buttons";
import HeadInfo from "components/HeadInfo";

function compareError(err, other) {
    return err.message === other.message;
}

export default function Login() {
    let [mode, setMode] = useState("login");
    let errorRef = useRef(null);

    useEffect(() => showText(""), [mode]);
    function showText(text) {
        errorRef.current.innerText = text;
    }

    function handleError(err) {
        let text;
        if (compareError(err, Account.Errors.LoginFailure)) {
            text = "Invalid Username or Password";
        } else if (compareError(err, Account.Errors.PasswordReset)) {
            text = "Your password was reset";
        } else if (compareError(err, Account.Errors.BadPasswordRequirements)) {
            text = "The API is the wrong version";
        } else if (compareError(err, Account.Errors.RateLimited)) {
            text = "Your being ratelimited, please wait";
        } else if (compareError(err, Account.Errors.PasswordReset)) {
            text = "Your Password Does Not Meet the Requirements";
        } else {
            text = "An Unknown Error Occured";
        }
        showText(text);
    }

    return (
        <MessageBox>
            <Container>
                <Buttons mode={mode} setMode={setMode} />
                <ErrorText ref={errorRef} />
                {mode === "login" ? (
                    <LoginForm errorHandler={handleError} showText={showText} />
                ) : (
                    <RegisterForm errorHandler={handleError} showText={showText} />
                )}
            </Container>
        </MessageBox>
    );
}

const Container = styled.div`
    border: 3px solid var(--BORDER-1);
    background-color: var(--BACKGROUND-3);
    transition: 0.15s ease-out;

    width: min(20rem, 50vw);
    min-width: 320px;
    border-radius: 1rem;
`;

const ErrorText = styled.div`
    text-align: center;
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    /* font-weight: bolder; */
`;
