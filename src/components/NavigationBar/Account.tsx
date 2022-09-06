import React, { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image";
import Redirects from "js/redirects";
import useAccount from "hooks/accountHook";
import NoSSR from "react-no-ssr"
import styles from "./navbar.module.css";


function AccountLoggedIn({ useText, username, logout }) {
    let callback = () => {
        logout();
        window.location.reload();
    };
    
    return (
        <div className={styles.section} onClick={callback}>
            <Icon src="/images/profile.svg" alt="Profile" />
            {useText ? <span className="navbar-button-text">{username}</span> : null}
        </div>
    );
}


function AccountLogin({ useText }) {
    return (
        <Link href={Redirects.login}>
            <div className={styles.section}>
                <Icon src="/images/profile.svg" alt="Login" />
                {useText ? <span className="navbar-button-text">Login</span> : null}
            </div>
        </Link>
    );
}


export default function AccountSection({ text: useText }) {
    const Account = useAccount();

    if (Account.loggedIn) {
        return <AccountLoggedIn
            useText={useText}
            logout={Account.logout}
            username={Account.username}
        />
    } else {
        return <AccountLogin
            useText={useText}
        />
    }
}


function Icon({ src, alt = "" }) {
    return (
        <div className={styles.icon}>
            <Image src={src} alt={alt} height="128" width="128" />
        </div>
    );
}
