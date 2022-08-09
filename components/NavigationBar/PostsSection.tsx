import React from "react";
import Settings from "js/settings";
import Redirects from "js/redirects";
import useMobile from "hooks/mobileHook";
import LayoutButtons from "./LayoutButtons";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function PostsSection(props) {
    let { text } = props;
    let isMobile = useMobile();

    if (isMobile) {
        return (
                <Link href="/posts">
                    <div className={styles.section}>
                        <img className={styles.icon} src="/images/posts.svg" alt="" />
                        {text ? <span className="navbar-button-text">Posts</span> : null}
                    </div>
                </Link>
        );
    } else {
        return (
            <div className={styles.section}>
                <img className={styles.icon} src="/images/posts.svg" alt="" />
                {text ? <span className="navbar-button-text">Posts</span> : null}
                <LayoutButtons current={Settings.searchLayout} />
            </div>
        );
    }
}
