import React, { useState, useRef, useEffect } from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import MessageBox from "components/MessageBox";
import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import Buttons from "components/AuthButtons";
import { Account } from "js/booru";

function compareError(err, other) {
    return err.message === other.message;
}

export const getServerSideProps: GetServerSideProps = async ({ query, res }) => {
    let { mode } = query
    return { props: { initial_mode: mode } }
}

export default function Login({ initial_mode }) {
    let [mode, setMode] = useState(initial_mode);

    let errorRef = useRef(null);
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
        } else if (compareError(err, Account.Errors.UserAlreadyExists)) {
            text = "User already exists";
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
    font-weight: bolder;
`;
