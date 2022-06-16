import React from "react";

export default function PostOverlay(props) {
    let { toggleSearchBox, toggleCreateBox } = props;
    
    return (
        <React.Fragment>
            <div id="posts-overlay">
                <div className="posts-overlay-button" title="Create Post">
                    <img src="/images/plus.svg" alt="Create Post" onClick={toggleCreateBox} />
                </div>
                <div className="posts-overlay-button" title="Search">
                    <img src="/images/search.svg" alt="Search" onClick={toggleSearchBox} />
                </div>
            </div>
        </React.Fragment>
    );
}