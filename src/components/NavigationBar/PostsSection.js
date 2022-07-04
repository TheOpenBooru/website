import React from "react";
import Settings from "js/settings";
import Redirects from "js/redirects";
import useMobile from "js/mobileHook";
import LayoutButtons from "./LayoutButtons";


export default function PostsSection(props) {
    let { text } = props;
    let isMobile = useMobile();

    if (isMobile) {
        return (
            <a className="navbar-section" href={Redirects.search("columns")} >
                <img className="navbar-button-icon" src="/images/posts.svg" alt="" />
                {text ? <span className="navbar-button-text">Posts</span> : null}
            </a>
        );
    } else {
        return (
            <div className="navbar-section">
                <img className="navbar-button-icon" src="/images/posts.svg" alt="" />
                {text ? <span className="navbar-button-text">Posts</span> : null}
                <LayoutButtons current={Settings.searchLayout} />
            </div>
        );
    }
}

