import { useState } from "react";

export default function useMobile(): boolean {
    const [MobileStatus, setMobileStatus] = useState(getMobileStatus());

    function getMobileStatus() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        return vw / vh < 1;
    }

    function updateMobileStatus() {
        let isMobileCurrent = getMobileStatus();
        setMobileStatus(isMobileCurrent);
    }
    window.addEventListener("resize", updateMobileStatus);

    return MobileStatus;
}
