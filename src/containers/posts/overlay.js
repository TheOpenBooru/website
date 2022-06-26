import React,{ useRef } from "react";
import MessageBox from "components/MessageBox";
import SearchBox from "components/SearchBox";
import CreatePost from "components/CreatePost";

export default function PostOverlay(props) {
    let { query, setQuery } = props;
    let searchBoxRef = useRef(null);
    let createBoxRef = useRef(null);
    
    function toggleSearchBox() {
        let searchBoxElem = searchBoxRef.current
        let createBoxElem = createBoxRef.current
        let isVisible = searchBoxElem.style.display === "none"
        if (isVisible) {
            createBoxElem.style.display = "none";
            searchBoxElem.style.display = "unset";
        } else {
            searchBoxElem.style.display = "none";
        }
    }
    
    function toggleCreateBox() {
        let searchBoxElem = searchBoxRef.current
        let createBoxElem = createBoxRef.current
        let isVisible = createBoxElem.style.display === "none"
        if (isVisible) {
            searchBoxElem.style.display = "none";
            createBoxElem.style.display = "unset";
        } else {
            createBoxElem.style.display = "none";
        }
    }

    return (
        <React.Fragment>
            <div ref={searchBoxRef} style={{display:"none"}}>
                <MessageBox>
                    <SearchBox query={query} setQuery={setQuery} />
                </MessageBox>
            </div>
            <div ref={createBoxRef} style={{display:"none"}}>
                <MessageBox >
                    <CreatePost />
                </MessageBox>
            </div>
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