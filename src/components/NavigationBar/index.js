import React from "react";
import LayoutButtons from "./LayoutButtons";
import { Account } from "js/booru";
import Redirects from "js/redirects";
import Settings from "js/settings";
import PostsSection from "./PostsSection";
import titleCase from "ap-style-title-case";
import "./navbar.css";

export default function NavigationBar() {
    return (
        <nav id="navbar">
            <VersionNumber />
            <PostsSection />
            <AccountSection />
        </nav>
    );
}

function VersionNumber() {
    return (
        <a id="navbar-VersionNumber" className="navbar-section" href="https://github.com/TheOpenBooru">
            <img className="navbar-button-icon" src="/images/github.svg" alt="" />
            <span className="navbar-button-text">Alpha: Boron</span>
        </a>
    );
}



function AccountSection() {
    let redirect = Account.loggedIn ? Redirects.profile() : Redirects.auth();
    let username = titleCase(Account.username);
    return (
        <a id="navbar-AccountSection" className="navbar-section" href={redirect}>
            {Account.loggedIn
                ? <span className="navbar-button-text">{username}</span>
                : <span className="navbar-button-text">Login</span>
            }
            <img className="navbar-button-icon" src="/images/profile.svg" alt="" />
        </a>
    );
}
