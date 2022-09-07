import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Info } from "js/booru";
import useSWR from "swr";



export default function Captcha({ setCaptchaToken }) {
    let { data: sitekey, error } = useSWR("sitekey",
        async () => {
            let info = await Info();
            return info.captcha_sitekey
        },
    )
    
    if (sitekey && !error) {
        return (
            <CaptchaContainer>
                <HCaptcha onVerify={(token) => setCaptchaToken(token)} sitekey={sitekey} />
            </CaptchaContainer>
        );
    } else {
        return <CaptchaContainer/>
    }

}

const CaptchaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
