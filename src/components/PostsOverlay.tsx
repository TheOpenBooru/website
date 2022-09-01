import React, { useState } from "react";
import styled from "styled-components";
import MessageBox from "components/MessageBox";
import SearchBox from "components/SearchBox";
import CreatePost from "components/CreatePost";
import ImportPost from "components/ImportPost";
import Button from "components/Button";
import { Account } from "js/booru";
import UploadImage from 'images/upload.svg'
import CreateImage from 'images/plus.svg'
import SearchImage from 'images/search.svg'

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
        <>
            <MessageBoxOverlay />
            <Container>
                {Account.Store.loggedIn
                    ? <Button src={UploadImage} alt="Import Post"  title="Import Post" onClick={toggleModeCallback("import")} />
                    : null
                }
                {Account.Store.loggedIn
                    ? <Button src={CreateImage} title="Create Post" alt="Create Post" onClick={toggleModeCallback("create")} />
                    : null
                }
                <Button src={SearchImage} alt="Search" onClick={toggleModeCallback("search")} />
            </Container>
        </>
    );
}


const Container = styled.div`
    position: fixed;
    z-index: 1;
    top: var(--NAVBAR-HEIGHT);
    right: 1rem;
    padding: .5rem;

    display: flex;
    flex-direction: row;
    justify-content: right;
`