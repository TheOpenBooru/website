import React, { useEffect } from "react";
import Image from "next/image";
import styled from "styled-components";
import Button from "components/Button";

export default function LayoutSelector() {
    return (
        <Contianer>
            <LayoutButton href="/posts/grid" title="Grid Layout">
                <LayoutIcon>
                    <Image src="/images/grid.svg" alt="" layout="fill" />
                </LayoutIcon>
            </LayoutButton>
            <LayoutButton href="/posts/column" title="Column Layout">
                <LayoutIcon>
                    <Image src="/images/columns.svg" alt="" layout="fill" />
                </LayoutIcon>
            </LayoutButton>
        </Contianer>
    );
}

const Contianer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

const LayoutButton = styled.a`
    width: 1.6rem;
    height: 1.6rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;

    background-color: var(--BACKGROUND-3);
    border: 0.15rem solid black;
    border-radius: 0.4rem;

    display: flex;
    justify-content: center;
    align-items: center;

    cursor: pointer;
    &:hover {
        background-color: var(--BACKGROUND-3-HOVER);
    }
`;

const LayoutIcon = styled.div`
    width: 80%;
    height: 80%;
    filter: invert(0%);

    animation-fill-mode: forwards;
    transition: 0.2s ease-in-out;
    ${LayoutButton}:hover & {
        filter: invert(90%);
    }
`;
