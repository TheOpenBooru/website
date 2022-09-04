import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import { Account } from "js/booru";

export default function usePermission(permission): boolean {
    let { data: allowed, status } = useQuery(
        `${permission}-${Account.Store.level}`,
        async () => {
            return await Account.hasPermission(permission)
        },
        {
            staleTime: 60,
        }
    )

    if (status == "success") {
        return allowed
    } else {
        return false
    }
}
