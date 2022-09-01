import React from "react";
import styled from "styled-components";

export default function LoadingIcon({ fadeIn = false as boolean}) {
    if (fadeIn) {
        return (
            <FadeIn>
                <Loading>
                    <div />
                    <div />
                    <div />
                </Loading>
            </FadeIn>
        );
    } else {
        return (
            <Loading>
                <div />
                <div />
                <div />
            </Loading>
        );
    }
}

const FadeIn = styled.div`
    @keyframes fadeIn{
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    opacity: 0;

    animation: fadeIn forwards 0.3s;
    animation-delay: 0.8s;
`


const Loading = styled.div`
    & {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }


    & div {
        display: inline-block;
        position: absolute;
        left: 8px;
        width: 16px;
        background: var(--BACKGROUND-3);
        animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    & div:nth-child(1) {
        left: 8px;
        animation-delay: -0.24s;
    }
    & div:nth-child(2) {
        left: 32px;
        animation-delay: -0.12s;
    }
    & div:nth-child(3) {
        left: 56px;
        animation-delay: 0;
    }

    @keyframes lds-facebook {
    0% {
        top: 8px;
        height: 64px;
    }
    50%, 100% {
        top: 24px;
        height: 32px;
    }
    }
`
