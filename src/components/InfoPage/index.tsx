import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import About from "./About";
import ContactUs from "./ContactUs";

type InfoProps = {
    mode?: string
}

export default function Info({mode: initialMode = "About"}:InfoProps) {
    const [mode, setMode] = useState(initialMode);
    const options = {
        "About": About,
        "Contact US": ContactUs,
    };
    const CurrentPage = options[mode];

    return (
        <Container>
            <Sidebar options={Object.entries(options)} currentOption={mode} callback={setMode} />
            <PageContainer key={mode}>
                <CurrentPage/>
            </PageContainer>
        </Container>
    );
}


const Container = styled.div`
    display: grid;
    grid-template-columns: 11rem 1fr;
    
    transition: 200ms all ease-in-out;
`


const PageContainer = styled.div`
    margin: .5rem;
    font-size: 1.2rem;
`;
