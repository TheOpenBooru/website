import React from "react";
import Image from "next/image";
import Link from "next/link";
import Redirects from "js/redirects";
import useMobile from "hooks/mobileHook";
import AccountSection from "./Account"
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
