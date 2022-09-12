import React, { useEffect } from "react";
import Image from "next/future/image";
import titleCase from "ap-style-title-case";
import styled from "styled-components";

export default function LayoutSelector({ layout: CurrentLayout, setLayout }) {
    function Icon({ layout, src }) {
        return (
            <LayoutButton
                title={`${titleCase(layout)} Layout`}
                onClick={() => setLayout(layout)}
                // @ts-ignore, styled-components prop
                active={CurrentLayout === layout}
            >
                <StyledImage src={src} alt="" fill sizes="min-width: 2rem"/>
            </LayoutButton>
        )
    }

    return (
        <Contianer>
            <Icon layout="column" src="/images/columns.svg"/>
            <Icon layout="grid" src="/images/grid.svg"/>
        </Contianer>
    );
}


const Contianer = styled.div`
    position: absolute;
    top: var(--NAVBAR-HEIGHT);
    z-index: 2;
    margin: .5rem;
    width: fit-content;
    padding: .2rem;
    
    border: var(--BORDER-1) solid .2rem;
    border-radius: .5rem;
    
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: var(--BACKGROUND-2);
`;

const LayoutButton = styled.a`
    cursor: pointer;
    position: relative;

    width: 1.2rem;
    height: 1.2rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    padding: .2rem;
    
    border: 0.15rem solid black;
    border-radius: 0.4rem;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    background: var(--BACKGROUND-3);
    &:hover {
        background: var(--BACKGROUND-3-HOVER);
    }

    ${ // @ts-ignore, styled-components prop
        ({ active }) => active
        ? "background: var(--BACKGROUND-3-HOVER) !important;"
        : null
    }
`;

const StyledImage = styled(Image)`
    filter: invert(0%);

    animation-fill-mode: forwards;
    transition: 0.2s ease-in-out;
    ${LayoutButton}:hover & {
        filter: invert(90%);
    }
`