import React from "react";
import Redirects from "js/redirects";
import titleCase from "ap-style-title-case";
import "./layout.css";

const layouts = [
    {
        name: "grid",
        icon: "/images/grid.svg",
    },
    {
        name: "column",
        icon: "/images/columns.svg",
    },
    {
        name: "fullscreen",
        icon: "/images/fullscreen.svg",
    },
];

export default function LayoutSelector(props) {
    let icons = layouts.map((v) => {
        let id = `layout-${v.name}`; // Used to remove specific layouts on mobile devices
        let alt = titleCase(v.name + " Layout");
        let href = Redirects.postSearch(v.name);
        return (
            <a href={href} id={id} className="layoutSelector-button" title={alt} key={v.name}>
                <img className="layoutSelector-button-icon" alt={alt} src={v.icon} />
            </a>
        );
    });

    return <div className="layoutSelector">{icons}</div>;
}
