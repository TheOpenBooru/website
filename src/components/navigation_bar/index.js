import React from "react";
import CreatePostBox from "../create_post";
import PostSearch from "./post_search";
import "./nav_bar.css";

function PageButton(props) {
    return (
        <a className="navbar-section bordered" title={props.title} onClick={props.onClick} href={props.href}>
            <img className="navbar-button-icon" src={props.icon} alt="" />
            <span className="navbar-button-text" >{props.title}</span>
            {props.children}
        </a>
    );
}

function NavBar() {
    return (
        <nav id="navigation-bar">
            <PageButton title="Posts" icon="/posts.svg" >
                <PostSearch />
            </PageButton>
            {/* <CreatePostBox /> */}
        </nav>
    );
}

export default NavBar;
