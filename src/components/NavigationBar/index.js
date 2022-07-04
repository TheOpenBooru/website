import React from "react";
import PostsSection from "./PostsSection";
import { Account } from "js/booru";
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
            {text ? <span className="navbar-button-text">Alpha: Boron</span> : null}
        </a>
    );
}

function AccountSection(props) {
    let { text } = props;
    let username, onClick;
    if (Account.loggedIn) {
        onClick = () => {
            Account.logout();
            window.location.reload();
        }
        username = Account.username
    } else {
        onClick = () => Redirects.goto(Redirects.auth)
        username = "Login"
    }
    return (
        <div id="navbar-AccountSection" className="navbar-section" onClick={onClick}>
            <img className="navbar-button-icon" src="/images/profile.svg" alt="" />
            {text
                ? <span className="navbar-button-text">{username}</span>
                : null
            }
        </div>
    );
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
