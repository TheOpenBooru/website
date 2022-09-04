import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Account } from "js/booru";

export default function usePermission(permission): boolean {
    let [allowed, setAllowed] = useState(false);
    useEffect(() => {
        (async () => {
            let allowed = await Account.hasPermission(permission)
            setAllowed(allowed)
        })()
    }, [permission])

    return allowed
}
