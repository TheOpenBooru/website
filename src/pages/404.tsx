import React from "react";
import HeadInfo from "components/HeadInfo";
import styled from "styled-components";

export default function MissingPage() {
    return (
        <>
            <HeadInfo title="Page Not Found"/>
            <div>
                <Header>404 - Page Not Found</Header>
                <Message>Oopsie Woopsie, We Could Not Find The Page</Message>
            </div>
        </>
    );
}


const Header = styled.h1`
    font-size: 5rem;
    text-align: center;
`

const Message = styled.h2`
    font-size: 2rem;
    text-align: center;
`