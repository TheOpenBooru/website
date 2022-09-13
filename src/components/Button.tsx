import React from "react";
import styled from "styled-components";
import FutureImage from "next/future/image";


export default function Button({ src, alt, ...props}) {
    return (
        <ButtonContainer>
            <StyledImage src={src} alt={alt} {...props}/>
        </ButtonContainer>
    )
}


const ButtonContainer = styled.div`
    aspect-ratio: 1/1;
    width: 2rem;
    height: 2rem;
    
    margin-left: 0.1rem;
    margin-right: 0.1rem;
    padding: 0.25rem;

    background-color: var(--BACKGROUND-3);
    border: 0.15rem solid var(--BORDER-1);
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


const StyledImage = styled(FutureImage)`
    filter: invert(0%);

    animation-fill-mode: forwards;
    transition: 0.2s ease-in-out;
    ${ButtonContainer}:hover & {
        filter: invert(90%);
    }
`
