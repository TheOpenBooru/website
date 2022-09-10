import { useState, useEffect } from "react";
import { Account } from "js/booru";
import useSWR from "swr";

export default function usePermission(permission: string): boolean {
    let { data, error } = useSWR("Permissions", Account.permissions)
    
    if (error || !data) {
        return false 
    } else {
        if (!(permission in data)) {
            throw new Error("Invalid Permission: " + permission)
        }
        
        let allowed = data[permission]["has_permission"]
        return allowed
    }
}
