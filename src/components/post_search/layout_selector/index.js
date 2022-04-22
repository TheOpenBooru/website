import React from "react";
import Settings from "../../../js/settings.js";
import "./index.css";

export default function LayoutSelector(props) {
    let update_settings = (layout) => () => {
        // Scroll to the top to problems on the fullscreen layout
        window.scrollTo(0, 0);

        Settings.Search_Layout = layout;
        window.location.reload();
    };

    return (
        <div className="layout_selector">
            <div className="layout_selector-button" onClick={update_settings("grid")}>
                <img
                    alt="Grid Layout"
                    className="layout_selector-button-icon"
                    src="/images/grid.svg"
                />
            </div>
            <div className="layout_selector-button" onClick={update_settings("columns")}>
                <img
                    alt="Column Layout"
                    className="layout_selector-button-icon"
                    src="/images/columns.svg"
                />
            </div>
            <div className="layout_selector-button" onClick={update_settings("fullscreen")}>
                <img
                    alt="Fullscreen Layout"
                    className="layout_selector-button-icon"
                    src="/images/fullscreen.svg"
                />
            </div>
        </div>
    );
}
