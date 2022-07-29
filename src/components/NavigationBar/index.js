import React from "react";
import PostsSection from "./PostsSection";
import Booru, { Account } from "js/booru";
import Redirects from "js/redirects";
import useMobile from "js/mobileHook";
import "./navbar.css";

export default function NavigationBar() {
    let isMobile = useMobile();
    if (!isMobile) {
        return (
            <nav id="navbar">
                <VersionNumber text />
                <PostsSection text />
                <AccountSection text />
            </nav>
        );
    } else {
        return (
            <nav id="navbar">
                <AccountSection text />
                <PostsSection text />
            </nav>
        );
    }
}

function VersionNumber(props) {
    let { text } = props;
    return (
        <a
            id="navbar-VersionNumber"
            className="navbar-section"
            href="https://github.com/TheOpenBooru"
        >
            <img className="navbar-button-icon" src="/images/github.svg" alt="" />
            {text ? <span className="navbar-button-text">Alpha: Carbon</span> : null}
        </a>
    );
}

function AccountSection({ text }) {
    if (Account.loggedIn) {
        let callback = () => {
            Account.logout();
            window.location.reload();
        }
        return (
            <div id="navbar-AccountSection" className="navbar-section" onClick={callback}>
                <img className="navbar-button-icon" src="/images/profile.svg" alt="" />
                {text ? <span className="navbar-button-text">{Account.username}</span> : null}
            </div>
        );
    } else {
        return (
            <a id="navbar-AccountSection" className="navbar-section" href={Redirects.login}>
                <img className="navbar-button-icon" src="/images/profile.svg" alt="" />
                {text ? <span className="navbar-button-text">Login</span> : null}
            </a>
        );
    }
}

function SettingsSection(props) {
    let { text } = props;
    return (
        <a id="navbar-SettingsSection" className="navbar-section" href={Redirects.settings}>
            <img className="navbar-button-icon" src="/images/cog.svg" alt="" />
            {text ? <span className="navbar-button-text">Settings</span> : null}
        </a>
    );
}
