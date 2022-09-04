import React, { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image";
import { Account } from "js/booru" 
import Redirects from "js/redirects";
import NoSSR from "react-no-ssr"
import styles from "./navbar.module.css";


function AccountLoggedIn({ text }) {
    let callback = () => {
        Account.logout();
        window.location.reload();
    };
    
    return (
        <div className={styles.section} onClick={callback}>
            <Icon src="/images/profile.svg" alt="Profile" />
            {text ? <span className="navbar-button-text">{Account.Store.username}</span> : null}
        </div>
    );
}


function AccountLogin({ text }) {
    return (
        <Link href={Redirects.login}>
            <div className={styles.section}>
                <Icon src="/images/profile.svg" alt="Login" />
                {text ? <span className="navbar-button-text">Login</span> : null}
            </div>
        </Link>
    );
}


export default function AccountSection({ text }) {
    if (process.env.READ_ONLY) {
        return null;
    } else {
        return (
            <NoSSR>
                {Account.Store.loggedIn
                    ? <AccountLoggedIn text={text} />
                    : <AccountLogin text={text} />
                }
            </NoSSR>
        );
    }
}


function Icon({ src, alt = "" }) {
    return (
        <div className={styles.icon}>
            <Image src={src} alt={alt} height="128" width="128" />
        </div>
    );
}
