import React from "react";
import Redirects from "js/redirects";
import PostsSection from "./PostsSection";
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
    return (
        <a id="navbar-AccountSection" className="navbar-section" href={Redirects.profile}>
            <span className="navbar-button-text">Profile</span>
            <img className="navbar-button-icon" src="/images/profile.svg" alt="" />
        </a>
    );
}
