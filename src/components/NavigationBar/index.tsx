import React from "react";
import Image from "next/image";
import Link from "next/link";
import PostsSection from "./PostsSection";
import Booru, { Account } from "js/booru";
import Redirects from "js/redirects";
import useMobile from "hooks/mobileHook";
import styles from "./navbar.module.css";

export default function NavigationBar() {
    let isMobile = useMobile();
    if (!isMobile) {
        return (
            <nav id={styles.navbar}>
                <VersionNumber text />
                <PostsSection text />
                <AccountSection text />
                <InfoSection text />
            </nav>
        );
    } else {
        return (
            <nav id={styles.navbar}>
                <AccountSection text />
                <PostsSection text />
                <InfoSection text />
            </nav>
        );
    }
}

function VersionNumber(props) {
    let { text } = props;
    return (
        <a
            id={styles.VersionNumber}
            className={styles.section}
            href="https://github.com/TheOpenBooru"
        >
            <Icon src="/images/github.svg" />
            {text ? <span className="navbar-button-text">Alpha: Carbon</span> : null}
        </a>
    );
}

function AccountSection({ text }) {
    if (Account.loggedIn) {
        let callback = () => {
            Account.logout();
            window.location.reload();
        };
        return (
            <div className={styles.section} onClick={callback}>
                <Icon src="/images/profile.svg" />
                {text ? <span className="navbar-button-text">{Account.username}</span> : null}
            </div>
        );
    } else {
        return (
            <a className={styles.section} href={Redirects.login}>
                <Icon src="/images/profile.svg" />
                {text ? <span className="navbar-button-text">Login</span> : null}
            </a>
        );
    }
}

function InfoSection(props) {
    let { text } = props;
    return (
        <a className={styles.section} href={Redirects.info}>
            <Icon src="/images/info.svg" />
            {text ? <span className="navbar-button-text">Info</span> : null}
        </a>
    );
}

function Icon({ src }) {
    return (
        <div className={styles.icon}>
            <Image src={src} alt="" height="128" width="128" />
        </div>
    );
}
