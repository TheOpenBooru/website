import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Account } from "js/booru";

export default function usePermission(permission: string): boolean {
    let [allowed, setAllowed] = useState(false);
    useEffect(() => {
        (async () => {
            let data = await Account.permissions();
            if (!(permission in data)) {
                throw new Error("Invalid Permission: " + permission)
            }
            
            let hasPerm = data[permission]["has_permission"]
            setAllowed(hasPerm);
        })()
    }, [permission])

    return allowed
}
