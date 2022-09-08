import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import HeadInfo from "components/HeadInfo";
import About from "./About";
import ContactUs from "./ContactUs";
import Credits from "./Credits";
import GDPR from "./GDPR";
import { useRouter } from "next/router";

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
    grid-template-columns: 10rem 1fr;
    
    transition: 200ms all ease-in-out;
`


const PageContainer = styled.div`
    margin: .5rem;
`;
