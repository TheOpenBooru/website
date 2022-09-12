import { useState, useEffect } from "react";

type AgeConfirmationHook = {
    isOver18: boolean,
    confirm: Function
}
export default function useAgeConfirmation(): AgeConfirmationHook {
    const [over18, setOver18] = useState(true);

    function confirm() {
        if (typeof window === "undefined") return;

        localStorage.setItem("Over18", "Accepted")
        setOver18(true);
    }
    
    useEffect(() => {
        let confirmed = localStorage.getItem("Over18")
        if (confirmed !== "Accepted") {
            setOver18(false)
        }
    }, [])
    
    return {isOver18: over18, confirm};
}
