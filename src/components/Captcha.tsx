import React, { useState, useEffect } from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import { useQuery } from "react-query";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Info } from "js/booru";



export default function Captcha({ setCaptchaToken }) {
    async function getSitekey() {
        let info = await Info();
        return info.captcha_sitekey
    }

    let { data: sitekey, status} = useQuery("sitekey", getSitekey)
    
    if (status === "success") {
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
