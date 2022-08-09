import React from "react";
import Image from "next/image";
import styled from "styled-components";
import GridImage from "public/images/grid.svg";
import ColumnImage from "public/images/columns.svg";

export default function LayoutSelector() {
    return (
        <Contianer className="layoutSelector">
            <LayoutButton href="/posts/grid" title="Grid Layout">
                <Image alt="" src={GridImage} height="30w" width="30w" />
            </LayoutButton>
            <LayoutButton href="/posts/column" title="Column Layout">
                <Image alt="" src={ColumnImage} height="30w" width="30w" />
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
    transition: 0.2s ease-in-out;
    &:hover {
        background-color: var(--BACKGROUND-3-HOVER);
    }
`;

const LayoutIcon = styled.img`
    width: 80%;
    height: 80%;
    filter: invert(0%);

    animation-fill-mode: forwards;
    transition: 0.2s ease-in-out;
    ${LayoutButton}:hover & {
        filter: invert(90%);
    }
`;
