import React from "react";
import styled from "styled-components";
import Image from "next/image";

type ButtonProps = {
    src: string
}
export default function Button({ src }: ButtonProps) {
    return (
        <ButtonContainer>
            <ImageContainer>
                <Image src={src} alt="" layout="fill"/>
            </ImageContainer>
        </ButtonContainer>
    )
}


const ButtonContainer = styled.div`
    width: 2rem;
    height: 2rem;
    
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


const ImageContainer = styled.div`
    width: 80%;
    height: 80%;
    filter: invert(0%);

    animation-fill-mode: forwards;
    transition: 0.2s ease-in-out;
    ${ButtonContainer}:hover & {
        filter: invert(90%);
    }
`
