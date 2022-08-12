import React, { useRef, useState } from "react";
import Image from "next/image";
import MessageBox from "components/MessageBox";
import SearchBox from "components/SearchBox";
import CreatePost from "components/CreatePost";
import ImportPost from "components/ImportPost";
import { Account } from "js/booru";
import UploadImage from 'images/upload.svg'
import CreateImage from 'images/plus.svg'
import SearchImage from 'images/search.svg'
import styles from "./overlay.module.css";

export default function PostOverlay({ query, setQuery }) {
    let [mode, setMode] = useState(null);

    const toggleModeCallback = (value) => () => {
        if (mode === null) {
            setMode(value)
        } else {
            setMode(null)
        }
    }


    function MessageBoxOverlay() {
        if (mode === "create") {
            return (
                <MessageBox>
                    <CreatePost />
                </MessageBox>
            )
        } else if (mode === "import") {
            return (
                <MessageBox>
                    <ImportPost />
                </MessageBox>
            );
        } else if (mode === "search") {
            return (
                <MessageBox>
                    <SearchBox
                        query={query}
                        setQuery={setQuery}
                        close={() => setMode(null)}
                    />
                </MessageBox>
            );
        } else {
            return null
        }
    }

    return (
        <React.Fragment>
            <MessageBoxOverlay />
            <div id={styles.overlay}>
                {Account.loggedIn
                    ? (<div className={styles.button} title="Import Post">
                        <Image src={UploadImage} alt="Import Post" onClick={toggleModeCallback("import")} />
                    </div>)
                    : null
                }
                {Account.loggedIn
                    ? (<div className={styles.button} title="Create Post">
                        <Image src={CreateImage} alt="Create Post" onClick={toggleModeCallback("create")} />
                    </div>)
                    : null
                }
                <div className={styles.button} title="Search">
                    <Image src={SearchImage} alt="Search" onClick={toggleModeCallback("search")} />
                </div>
            </div>
        </React.Fragment>
    );
}
