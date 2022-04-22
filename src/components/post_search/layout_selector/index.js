import React from "react";
import Settings from "../../../js/settings.js";
import "./index.css";

export default function LayoutSelector(props) {
    let update_settings = (layout) => () => {
        Settings.Search_Layout = layout;
        window.location.reload();
    };
    let layouts = [
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

    let icons = layouts.map((layout) => {
        let activeStyle =
            Settings.Search_Layout === layout.name ? "layout_selector-button-active" : "";
        return (
            <div
                key={layout.name}
                className={"layout_selector-button " + activeStyle}
                onClick={update_settings(layout.name)}
            >
                <img
                    alt={`Layout: ${layout.name}`}
                    className="layout_selector-button-icon"
                    src={layout.icon}
                />
            </div>
        );
    });

    return <div className="layout_selector">{icons}</div>;
}
