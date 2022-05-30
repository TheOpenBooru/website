import React from "react";
import Redirects from "js/redirects"
import "./navbar.css";

function PageButton(props) {
    let default_classes = "navbar-section bordered "
    return (
        <a id={props.id} className={default_classes + props.className} href={props.href}>
            <img className="navbar-button-icon" src={props.icon} alt="" />
            <span className="navbar-button-text" >{props.text}</span>
            {props.children}
        </a>
    );
}

function NavBar() {
    return (
        <nav id="navigation-bar">
            <PageButton
                id="version-number"
                className="bordered-hover"
                text="Alpha: Lithium"
                icon="/images/github.svg"
                href="https://github.com/TheOpenBooru"
            ></PageButton>
            <PageButton
                className="bordered-hover"
                text="Posts"
                icon="/images/posts.svg"
                href={Redirects.post_search()}
            ></PageButton>
        </nav>
    );
}

export default NavBar;
