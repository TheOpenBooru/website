import React from "react";
import Image from "next/image";
import Link from "next/link";
import Redirects from "js/redirects";
import AccountSection from "./Account"
import styles from "./navbar.module.css";

export default function NavigationBar() {
    return (
        <nav id={styles.navbar}>
            <PostsSection text />
            <InfoSection text />
            <AccountSection text />
        </nav>
    );
}


function PostsSection({ text }) {
    return (
        <Link href="/">
            <a className={styles.section}>
                    <Icon src="/images/home.svg" alt="Home" />
                    {text ? <span className="navbar-button-text">Home</span> : null}
            </a>
        </Link>
    )
}


function InfoSection({ text }) {
    return (
        <Link href={Redirects.info}>
            <a className={styles.section}>
                    <Icon src="/images/info.svg" alt="Info" />
                    {text ? <span className="navbar-button-text">Info</span> : null}
            </a>
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
