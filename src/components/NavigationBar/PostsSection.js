import React from "react";
import Settings from "js/settings";
import Redirects from "js/redirects";
import { useIsMobile } from "js/mobileHook";
import LayoutButtons from "./LayoutButtons";


export default function PostsSection(props) {
    let isMobile = useIsMobile();

    if (isMobile) {
        return (
            <a className="navbar-section" href={Redirects.search("columns")} >
                <img className="navbar-button-icon" src="/images/posts.svg" alt="" />
                <span className="navbar-button-text">Posts</span>
            </a>
        );
    } else {
        return (
            <div className="navbar-section">
                <img className="navbar-button-icon" src="/images/posts.svg" alt="" />
                <span className="navbar-button-text">Posts</span>
                <LayoutButtons current={Settings.searchLayout} />
            </div>
        );
    }
}

