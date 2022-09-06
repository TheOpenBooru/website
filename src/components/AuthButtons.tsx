import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

Buttons.propTypes = {
    mode: PropTypes.string,
    setMode: PropTypes.func,
};
export default function Buttons({ mode, setMode }) {
    return (
        <Container>
            <LeftButton
                onClick={() => setMode("login")}
                style={{ background: mode === "login" ? null : "var(--BACKGROUND-5)"}}
                type="submit"
                value="Login"
            />
            <RightButton
                onClick={() => setMode("register")}
                style={{background: mode === "register" ? null : "var(--BACKGROUND-5)"}}
                type="submit"
                value="Register"
            />
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1rem;
`;

const Button = styled.input`
    cursor: pointer;
    user-select: none;

    width: 100%;

    background: var(--BACKGROUND-4);

    border: 0 solid var(--BORDER-1);
    border-bottom-width: 0.2rem;

    text-align: center;
    vertical-align: middle;
    line-height: 2rem;
    font-size: larger;

    & .active {
        border-color: var(--BORDER-2);
    }

    transition: all ease-out 0.1s;
    &:hover {
        background: var(--BACKGROUND-4-HOVER) !important;
    }
`;

const LeftButton = styled(Button)`
    border-radius: 0.8rem 0 0 0;
    border-right-width: 0.15rem;
`;

const RightButton = styled(Button)`
    border-radius: 0 0.8rem 0 0;
    border-left-width: 0.15rem;
`;
