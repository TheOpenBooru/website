import React, { useState } from "react";
import styled from "styled-components";
import Redirects from "js/redirects";
import PostInfo from "components/PostInfo";
import PostMedia from "./media";
import { LeftButton, RightButton} from "./buttons";

export default function FullscreenPosts(props) {
    let { posts, morePostsCallback, finished, query, setQuery, noButtons } = props;
    let baseRef = React.useRef(null);
    let [ index, setIndex ] = useState(0);
    let [ crntSearchQuery, setCrntSearchQuery ] = useState(query);
    
    morePostsCallback ||= () => {};
    let crntPost = posts[index];
    let prevPost = posts[index - 1];
    let nextPost = posts[index + 1];

    let postsRemaining = posts.length - (index + 1)
    if (postsRemaining < 32) {
        morePostsCallback();
    }
    
    if (query !== crntSearchQuery) {
        setCrntSearchQuery(query);
        setIndex(0);
    }
    
    
    function VisitPost() {
        let link = Redirects.post(crntPost.id);
        window.location.href = link;
    }
    
    function GoToNextPost() {
        if (index !== posts.length - 1) {
            setIndex(index + 1);
        }
    }
    
    function GoToPreviousPost() {
        if (index > 0) {
            setIndex(index - 1);
        }
    }

    onkeydown = (e) => {
        let KEYBINDS = {
            w: GoToNextPost,
            ArrowUp: VisitPost,
            a: GoToNextPost,
            ArrowRight: GoToNextPost,
            d: GoToPreviousPost,
            ArrowLeft: GoToPreviousPost,
        };
        if (e.key in KEYBINDS) {
            KEYBINDS[e.key]();
        }
    };

    return (
        <Container ref={baseRef}>
            <PostContainer>
                {noButtons ? null : <LeftButton callback={GoToPreviousPost} post={prevPost}/> }
                <PostMedia post={crntPost} noButtons={noButtons} />
                {noButtons ? null : <RightButton callback={GoToNextPost} post={nextPost} finished={finished}/> }
            </PostContainer>
            <PostInfo post={crntPost}/>
        </Container>
    );
}


const Container = styled.div`
    position: relative;
    height: var(--PAGE-HEIGHT);
    width: 100%;
    top:0;
    left:0;
    overflow-y: auto;
    overflow-x: hidden;

    --BUTTON-WIDTH: 5rem;
`


const PostContainer = styled.div`
    width: 100%;
    height: calc(100%  - 1.5rem);
    user-select: none;
    
    background-color: var(--BACKGROUND);
    border-bottom: #000 solid 1px;

    /* Flex */
    display:flex;
    flex-flow: column nowrap;
    justify-content: space-between;
`