import { useState, useEffect } from "react";

type CookieConsentHook = {
    hasConsented: boolean,
    accept: Function
}
export default function useCookieConsent(): CookieConsentHook {
    const [CookieConsent, setCookieConsent] = useState(true);

    function accept() {
        if (typeof window === "undefined") return;

        localStorage.setItem("CookieConsent", "Accepted")
        setCookieConsent(true);
    }
    
    useEffect(() => {
        let consent = localStorage.getItem("CookieConsent")
        if (consent !== "Accepted") {
            setCookieConsent(false)
        }
    }, [])
    
    return {hasConsented: CookieConsent, accept};
}
