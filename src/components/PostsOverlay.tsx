import React, { useState } from "react";
import styled from "styled-components";
import MessageBox from "components/MessageBox";
import SearchBox from "components/SearchBox";
import CreatePost from "components/CreatePost";
import ImportPost from "components/ImportPost";
import Button from "components/Button";
import usePermission from "hooks/permissionHook";
import UploadImage from 'images/upload.svg'
import CreateImage from 'images/plus.svg'
import SearchImage from 'images/search.svg'

export default function PostOverlay({ query, setQuery }) {
    let [mode, setMode] = useState(null);
    let canCreatePost = usePermission("canCreatePosts")

    const ModeCallback = (value) => () => {
        if (mode === value) {
            setMode(null)
        } else {
            setMode(value)
        }
    }

    function ModeSelector() {
        switch (mode) {
            case "create":
                return <CreatePost/>
            case "import":
                return <ImportPost />
            case "search":
            return <SearchBox
                    query={query}
                    setQuery={setQuery}
                    close={() => setMode(null)}
            />
            default:
                return null
        }
    }

    function MessageBoxOverlay() {
        if (mode) {
            return (
                <MessageBox>
                    <ModeContainer>
                        <ModeSelector/>
                    </ModeContainer>
                </MessageBox>
            )
        } else {
            return null
        }
    }

    return (
        <>
            <MessageBoxOverlay />
            <Container>
                {canCreatePost
                    ? <Button src={UploadImage} alt="Import Post"  title="Import Post" onClick={ModeCallback("import")} />
                    : null
                }
                {canCreatePost
                    ? <Button src={CreateImage} title="Create Post" alt="Create Post" onClick={ModeCallback("create")} />
                    : null
                }
                <Button src={SearchImage} alt="Search" onClick={ModeCallback("search")} />
            </Container>
        </>
    );
}


const Container = styled.div`
    position: fixed;
    z-index: 1;
    top: var(--NAVBAR-HEIGHT);
    right: 15px;
    padding: .5rem;

    display: flex;
    flex-direction: row;
    justify-content: right;
`

const ModeContainer = styled.div`
    z-index: 2;
    position: relative;
`
