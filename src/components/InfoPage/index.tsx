import React, { useState } from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
import HeadInfo from "components/HeadInfo";
import ContactUs from "components/ContactUs";
import GDPR from "components/GDPR";
import About from "components/About";
import { useRouter } from "next/router";

type InfoProps = {
    mode: string
}

export default function Info({mode}:InfoProps) {
    let [currentMode, setMode] = useState(mode);

    const options = {
        "About": About,
        "GDPR": GDPR,
        "Contact US": ContactUs,
    };

    return (
        <>
            <HeadInfo title="Info" />
            <Container>
                <Sidebar options={Object.entries(options)} currentOption={mode} callback={setMode} />
                <PageContainer>
                    <GDPR/>
                </PageContainer>
            </Container>
        </>
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
