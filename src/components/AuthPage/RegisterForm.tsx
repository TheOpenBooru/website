//@ts-nocheck
import React, { useRef, useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import usePermission from "hooks/permissionHook";
import Captcha from "components/Captcha";
import Redirects from "js/redirects";
import { Account } from "js/booru";

RegisterForm.propTypes = {
    errorHandler: PropTypes.func,
    showText: PropTypes.func,
};
export default function RegisterForm({ errorHandler, showText }) {
    const permission = usePermission("canRegister");

    let usernameRef = useRef();
    let passwordRef = useRef();
    let confirmPasswordRef = useRef();
    let [captchaToken, setCaptchaToken] = useState(null);

    function GetInput() {
        let username = usernameRef.current.value;
        let password = passwordRef.current.value;
        let confirmPassword = confirmPasswordRef.current.value;
        return [username, password, confirmPassword];
    }
    
    function ClearInput() {
        usernameRef.current.value = "";
        passwordRef.current.value = "";
        confirmPasswordRef.current.value = "";
    }

    async function HandleRegister() {
        let [username, password, confirmPassword] = GetInput();
        if (username === "" && password === "") {
            showText("Please enter a username and password");
        } else if (username === "") {
            showText("Please enter a username");
        } else if (password === "") {
            showText("Please enter a password");
        } else if (password !== confirmPassword) {
            showText("Your Passwords Do Not Match");
        } else if (permission.captcha && captchaToken === null) {
            showText("Please solve the captcha");
        } else {
            ClearInput();
            try {
                await Account.register(username, password, captchaToken);
                await Account.login(username, password);
            } catch (err) {
                errorHandler(err);
                return;
            }
            Redirects.goto(Redirects.home());
        }
    }

    if (!permission.has_permission) {
        return (
            <Container>
                Account Registration Disabled
            </Container>
        )
    } else {
        return (
            <Container>
                <InputsContainer>
                    <InputText type="username" placeholder="Username" ref={usernameRef} />
                    <InputText type="password" placeholder="Password" ref={passwordRef} />
                    <InputText
                        type="password"
                        placeholder="Confirm Password"
                        ref={confirmPasswordRef}
                    />
                </InputsContainer>
                {permission.captcha
                    ? <Captcha setCaptchaToken={setCaptchaToken} />
                    : null
                }
                <RegisterButton onClick={HandleRegister} type="submit" value="Register" />
            </Container>
        );
        
    }
}

const Container = styled.div`
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const InputsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: nowrap column;
    justify-content: center;
    align-items: center;
    gap: 0.2rem;
`;

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

const RegisterButton = styled.input`
    height: 2rem;
    width: 100%;

    border-radius: 1rem;
    font-size: large;
    font-weight: bold;

    background-color: var(--BACKGROUND-4);
    border-color: var(--BORDER-1);
`;
