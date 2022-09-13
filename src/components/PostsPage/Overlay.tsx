import React, { useState, Suspense, lazy } from "react";
import styled from "styled-components";
import MessageBox from "components/MessageBox";
import Button from "components/Button";
import usePermission from "hooks/permissionHook";
import UploadImage from 'images/upload.svg'
import CreateImage from 'images/plus.svg'
import SearchImage from 'images/search.svg'

const SearchBox = lazy(() => import("components/SearchBox"));
const CreatePost = lazy(() => import("components/CreatePost"));
const ImportPost = lazy(() => import("components/ImportPost"));


export default function PostOverlay({ query, setQuery }) {
    let [mode, setMode] = useState(null);
    let {has_permission: canCreatePost} = usePermission("canCreatePosts")

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


    return (
        <>
            <Suspense>
                {mode
                    ? <MessageBox>
                        <ModeContainer>
                            <ModeSelector/>
                        </ModeContainer>
                    </MessageBox>
                    : null
                }
            </Suspense>
            <Container>
                {canCreatePost
                    ? <Button src={UploadImage} alt="Import Post"  title="Import Post" onClick={ModeCallback("import")} height="32" width="32" />
                    : null
                }
                {canCreatePost
                    ? <Button src={CreateImage} title="Create Post" alt="Create Post" onClick={ModeCallback("create")} height="32" width="32" />
                    : null
                }
                <Button src={SearchImage} alt="Search" onClick={ModeCallback("search")}  height="32" width="32" />
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
