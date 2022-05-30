import React from "react";
import Settings from "js/settings.js";
import Redirects from "js/redirects.js";
import "./index.css";

const layouts = [
    {
        name: "grid",
        display: "Grid",
        icon: "/images/grid.svg",
    },
    {
        name: "column",
        display: "Column",
        icon: "/images/columns.svg",
    },
    {
        name: "fullscreen",
        display: "Fullscreen",
        icon: "/images/fullscreen.svg",
    },
];

export default function LayoutSelector(props) {
    let { current } = props;
    
    let update_settings = (layout) => () => {
        Settings.Search_Layout = layout;
        window.location.href = Redirects.post_search();
    };

    let icons = layouts.map((v) => {
        let alt = `${v.display} Layout`;
        let callback = update_settings(v.name);
        let container_classes = "layout_selector-button";
        if (current === v.name) {
            container_classes += " layout_selector-button-active";
        }
        return (
            <div id={"layout-"+v.name} key={v.name} title={alt} className={container_classes} onClick={callback}>
                <img alt={v.display} src={v.icon} className="layout_selector-button-icon" />
            </div>
        );
    });

    return <div className="layout_selector">{icons}</div>;
}
