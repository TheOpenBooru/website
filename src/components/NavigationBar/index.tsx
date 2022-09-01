import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Booru, { Account } from "js/booru";
import Redirects from "js/redirects";
import useMobile from "hooks/mobileHook";
import styles from "./navbar.module.css";

export default function NavigationBar() {
    let isMobile = useMobile();
    if (!isMobile) {
        return (
            <nav id={styles.navbar}>
                <PostsSection text />
                <InfoSection text />
                <AccountSection text />
            </nav>
        );
    } else {
        return (
            <nav id={styles.navbar}>
                <PostsSection text />
                <InfoSection text />
                <AccountSection text />
            </nav>
        );
    }
}


function PostsSection({ text }) {
    return (
        <Link href="/">
            <div className={styles.section}>
                <Icon src="/images/home.svg" alt="Home" />
                {text ? <span className="navbar-button-text">Home</span> : null}
            </div>
        </Link>
    )
}


function AccountSection({ text }) {
    if (process.env.READ_ONLY) return null;
    if (Account.Store.loggedIn) {
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
    } else {
        return (
            <Link href={Redirects.login}>
                <div className={styles.section}>
                    <Icon src="/images/profile.svg" alt="Login" />
                    {text ? <span className="navbar-button-text">Login</span> : null}
                </div>
            </Link>
        );
    }
}


function InfoSection(props) {
    let { text } = props;
    return (
        <Link href={Redirects.info}>
            <div className={styles.section}>
                <Icon src="/images/info.svg" alt="Info" />
                {text ? <span className="navbar-button-text">Info</span> : null}
            </div>
        </Link>
    );
}


function Icon({ src, alt = "" }) {
    return (
        <div className={styles.icon}>
            <Image src={src} alt={alt} height="128" width="128" />
        </div>
    );
}
