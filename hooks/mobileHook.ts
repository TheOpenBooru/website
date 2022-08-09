import { useState, useEffect } from "react";

export default function useMobile(): boolean {
    const [MobileStatus, setMobileStatus] = useState(false);
    function getMobileStatus() {
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
        return vw / vh < 1;
    }

    useEffect(() => {
        function updateMobileStatus() {
            let isMobileCurrent = getMobileStatus();
            setMobileStatus(isMobileCurrent);
        }
        updateMobileStatus();
        window.addEventListener("resize", updateMobileStatus);
    }, [])
    
    return MobileStatus;
}
