import React,{ useRef } from "react";
import MessageBox from "components/MessageBox";
import SearchBox from "components/SearchBox";
import CreatePost from "components/CreatePost";
import ImportPost from "components/ImportPost";
import { Account } from "js/booru";
import "./overlay.css"

export default function PostOverlay(props) {
    let { query, setQuery } = props;
    let searchBoxRef = useRef(null);
    let createBoxRef = useRef(null);
    let importBoxRef = useRef(null);
    
    
    function toggleBox(element, others) {
        let isVisible = element.style.display !== "none"
        if (isVisible) {
            element.style.display = "none";
        } else {
            element.style.display = null;
            others.forEach((elm) => elm.style.display = "none")
        }
    }
    
    function toggleSearchBox() {
        toggleBox(searchBoxRef.current, [createBoxRef.current, importBoxRef.current])
    }
    
    function toggleCreateBox() {
        toggleBox(createBoxRef.current, [searchBoxRef.current, importBoxRef.current])
    }

    function toggleImportBox() {
        toggleBox(importBoxRef.current, [createBoxRef.current, searchBoxRef.current])
    }

    return (
        <React.Fragment>
            <MessageBox ref={searchBoxRef} style={{display:"none"}}>
                <SearchBox query={query} setQuery={setQuery} close={toggleSearchBox} />
            </MessageBox>
            <MessageBox ref={createBoxRef} style={{display:"none"}}>
                <CreatePost />
            </MessageBox>
            <MessageBox ref={importBoxRef} style={{display:"none"}}>
                <ImportPost />
            </MessageBox>
            <div id="posts-overlay">
                {Account.loggedIn
                    ? (<div className="posts-overlay-button" title="Create Post">
                        <img src="/images/upload.svg" alt="Create Post" onClick={toggleImportBox} />
                    </div>)
                    : null
                }
                {Account.loggedIn
                    ? (<div className="posts-overlay-button" title="Create Post">
                        <img src="/images/plus.svg" alt="Create Post" onClick={toggleCreateBox} />
                    </div>)
                    : null
                }
                <div className="posts-overlay-button" title="Search">
                    <img src="/images/search.svg" alt="Search" onClick={toggleSearchBox} />
                </div>
            </div>
        </React.Fragment>
    );
}