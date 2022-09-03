import { useState, useEffect } from "react";
import Account from "js/booru/account";

export default function usePermission(permission): boolean {
    const [Allowed, setAllowed] = useState(false);

    useEffect(() => {
        (async () => {
            let allowed = await Account.hasPermission(permission)
            setAllowed(allowed)
        })()
    }, [permission])
    
    return Allowed;
}
