import React from "react";
import HeadInfo from "components/HeadInfo";
import styled from "styled-components";

export default function MissingPage() {
    return (
        <>
            <HeadInfo title="An Error Has Occured"/>
            <div>
                <Header>500 - An Error Has Occured</Header>
                <Message>Oopsie Woopsie, Something Went Wrong</Message>
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