import React from "react";
import CreatePostBox from "../create_post";
import PostSearch from "./post_search";
import "./nav_bar.css";

function PageButton(props) {
    return (
        <a id={props.id} className={props.className} href={props.href}>
            <img className="navbar-button-icon" src={props.icon} alt="" />
            <span className="navbar-button-text" >{props.content}</span>
            {props.children}
        </a>
    );
}

function NavBar() {
    return (
        <nav id="navigation-bar">
            <PageButton
                className="navbar-section bordered bordered-hover"
                content="Alpha 1" icon="/images/github_logo.png"
                href="https://github.com/TheOpenBooru" id="version-number" />
            
            
            <PageButton className="navbar-section bordered" id="navbar-search" content="Search" icon="/images/posts.svg" >
                <PostSearch />
            </PageButton>
            <CreatePostBox className="navbar-section bordered"/>
        </nav>
    );
}

export default NavBar;
