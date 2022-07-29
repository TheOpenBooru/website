import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Info } from "js/booru";

export default function Captcha({ setCaptchaToken }) {
    let { data: sitekey, status } = useQuery('sitekey', loadSitekey)

    async function loadSitekey() {
        let info = await Info();
        return info.captcha_sitekey;
    }

    if (status === "loading") {
        return null;
    } else if (status === "error") {
        return (
            <CaptchaContainer>
                <HCaptcha />
            </CaptchaContainer>
        )
    } else {
        return (
            <CaptchaContainer>
                <HCaptcha onVerify={(token) => setCaptchaToken(token)} sitekey={sitekey} />
            </CaptchaContainer>
        )
    }
}


const CaptchaContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;