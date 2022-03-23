import React from "react";
import CreatePostBox from "../create_post";
import PostSearch from "./post_search";
import "./nav_bar.css";

function PageButton(props) {
    return (
        <div className="navbar-section bordered" id={props.id}>
            <img className="navbar-button-icon" src={props.icon} alt="" />
            <span className="navbar-button-text" >{props.content}</span>
            {props.children}
        </div>
    );
}

function NavBar() {
    return (
        <nav id="navigation-bar">
            <a className="navbar-section bordered bordered-hover"
                href="https://github.com/TheOpenBooru"  id="version-number">
                <img className="navbar-button-icon" src="/images/github_logo.png" alt="" />
                <text className="disable-link-text">Alpha 1</text>
            </a>

            <PageButton id="navbar-search" content="Search" icon="/images/posts.svg" >
                <PostSearch />
            </PageButton>
            <CreatePostBox className="navbar-section bordered"/>
        </nav>
    );
}

export default NavBar;
