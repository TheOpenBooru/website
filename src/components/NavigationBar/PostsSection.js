import React, {useEffect, useState} from "react";
import Settings from "js/settings";
import Redirects from "js/redirects";
import LayoutButtons from "./LayoutButtons";


export default function PostsSection(props) {
    let [isMobile, setIsMobile] = useState(false);

    function getIsMobile() {
        let bounds = window.document.body.getBoundingClientRect();
        return ((bounds.width / bounds.height) < 1)
    };

    function updateMobileStatus() {
        let isMobileCurrent = getIsMobile()
        if (isMobile !== isMobileCurrent) {
            setIsMobile(isMobileCurrent);
        }
    }

    window.addEventListener("resize", updateMobileStatus)
    useEffect(updateMobileStatus)

    if (isMobile) {
        return (
            <a
                id="navbar-PostsSection"
                className="navbar-section"
                href={Redirects.search("columns")}
            >
                <img className="navbar-button-icon" src="/images/posts.svg" alt="" />
                <span className="navbar-button-text">Posts</span>
            </a>
        );
    } else {
        return (
            <div id="navbar-PostsSection" className="navbar-section">
                <img className="navbar-button-icon" src="/images/posts.svg" alt="" />
                <span className="navbar-button-text">Posts</span>
                <LayoutButtons current={Settings.searchLayout} />
            </div>
        );
    }
}

