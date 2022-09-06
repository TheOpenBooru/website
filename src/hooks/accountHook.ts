import { useState, useEffect, useCallback } from "react";
import { Account } from "js/booru";

type AccountData = {
    token:string|null,
    username:string|null,
    loggedIn:string|null,
    login:Function,
    logout:Function,
}

export default function useAccount(): AccountData {
    const [token, setToken] = useState(null);
    const [username, setUsername] = useState(null);
    const [loggedIn, setLoggedIn] = useState(null);
    const login = Account.login
    const logout = Account.logout

    useEffect(() => {
        setToken(Account.Store.token)
        setUsername(Account.Store.username)
        setLoggedIn(Account.Store.loggedIn)
    }, [])
    

    return {
        token,
        username,
        loggedIn,
        login,
        logout,
    };
}
