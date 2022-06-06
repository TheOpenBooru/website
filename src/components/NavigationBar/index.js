import React from "react";
import Settings from "js/settings";
import LayoutButtons from "components/LayoutButtons";
import "./navbar.css";


function PageButton(props) {
    let { id, href, icon, text, children } = props;
    let className = "navbar-section bordered " + (props.className || "");
    if (href) {
        return (
            <a id={id} className={className} href={href}>
                <img className="navbar-button-icon" src={icon} alt="" />
                <span className="navbar-button-text">{text}</span>
                {children}
            </a>
        )
    } else {
        return (
            <div id={id} className={className}>
                <img className="navbar-button-icon" src={icon} alt="" />
                <span className="navbar-button-text">{text}</span>
                {children}
            </div>
        )
    }
}

export default function NavigationBar() {
    return (
        <nav id="navbar">
            <PageButton
                id="navbar-versionNumber"
                className="bordered-hover"
                text="Alpha: Beryllium"
                icon="/images/github.svg"
                href="https://github.com/TheOpenBooru"
            />
            <PageButton text="Posts" icon="/images/posts.svg">
                <LayoutButtons current={Settings.searchLayout} />
            </PageButton>
        </nav>
    );
}
