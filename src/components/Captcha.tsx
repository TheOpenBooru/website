import React from "react";
import styled from "styled-components";
import useSWR from "swr";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Info } from "js/booru";

export default function Captcha({ setCaptchaToken }) {
    let { data: sitekey, error } = useSWR("sitekey", loadSitekey);

    async function loadSitekey() {
        let info = await Info();
        return info.captcha_sitekey;
    }

    if (!sitekey) {
        return null;
    } else if (error) {
        return (
            <CaptchaContainer/>
        );
    } else {
        return (
            <CaptchaContainer>
                <HCaptcha onVerify={(token) => setCaptchaToken(token)} sitekey={sitekey.toString()} />
            </CaptchaContainer>
        );
    }
}

const CaptchaContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
