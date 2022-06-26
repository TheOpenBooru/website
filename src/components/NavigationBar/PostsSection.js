import React from "react";
import Settings from "js/settings";
import LayoutButtons from "./LayoutButtons";

export default function PostsSection(props) {
    return (
        <div id="navbar-PostsSection" className="navbar-section">
            <img className="navbar-button-icon" src="/images/posts.svg" alt="" />
            <span className="navbar-button-text">Posts</span>
            <LayoutButtons current={Settings.searchLayout} />
        </div>
    );
}