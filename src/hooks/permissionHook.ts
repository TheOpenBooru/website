import { useState, useEffect } from "react";
import { Account } from "js/booru";
import useSWR from "swr";

type Permission = {
    has_permission: boolean,
    captcha: boolean,
    ratelimt: string|null
}
export default function usePermission(permission: string): Permission {
    let { data, error } = useSWR( `Permissions-${Account.Store.level}`, Account.permissions, {
        revalidateIfStale: false,
        revalidateOnFocus: false,
        revalidateOnReconnect: false,
        }
    )
    
    if (error || !data) {
        return { has_permission: false, captcha: false, ratelimt: null} 
    } else if (!(permission in data)) {
        console.warn("Invalid Permission: " + permission)
        return { has_permission: true, captcha: true, ratelimt: null} 
    } else {
        return data[permission];
    }
}
