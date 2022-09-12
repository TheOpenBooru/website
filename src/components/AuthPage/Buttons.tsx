import React from "react";
import Link from "next/link";
import styled from "styled-components";
import PropTypes from "prop-types";

Buttons.propTypes = {
    currentMode: PropTypes.string,
};
export default function Buttons({ currentMode }) {
    return (
        <Container>
            <Link href="/auth/login" passHref>
                <LeftButton
                    style={{ background: currentMode === "login" ? null : "var(--BACKGROUND-5)"}}
                >
                        Login
                </LeftButton>
            </Link>
            <Link href="/auth/register" passHref>
                <RightButton
                    style={{background: currentMode === "register" ? null : "var(--BACKGROUND-5)"}}
                >
                    Register
                </RightButton>
            </Link>
        </Container>
    );
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 1rem;
`;

const Button = styled.a`
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
    
    text-decoration: none !important;
    color: black !important;
`;

const LeftButton = styled(Button)`
    border-radius: 0.8rem 0 0 0;
    border-right-width: 0.15rem;
`;

const RightButton = styled(Button)`
    border-radius: 0 0.8rem 0 0;
    border-left-width: 0.15rem;
`;
