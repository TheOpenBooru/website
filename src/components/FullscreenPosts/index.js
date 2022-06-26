import React, { useState } from "react";
import styled from "styled-components";
import Redirects from "js/redirects";
import PostInfo from "components/PostInfo";
import PostMedia from "./media";
import { LeftButton, RightButton} from "./buttons";

export default function FullscreenPosts(props) {
    let { posts, morePostsCallback, noButtons } = props;
    let baseRef = React.useRef(null);
    let [ index, setIndex ] = useState(0);
    let [searchHash, setSearchHash] = useState(0);
    
    morePostsCallback ||= () => {};
    let postData = posts[index];
    let prevPost = posts[index - 1];
    let nextPost = posts[index + 1];

    if (posts.length - index < 32) {
        morePostsCallback();
    }

    if (postData == null) {
        return null;
    }

    
    let firstPost = posts[0];
    if (firstPost && searchHash !== firstPost.id) {
        setSearchHash(firstPost.id);
        setIndex(0);
    }
    
    
    function VisitPost() {
        let link = Redirects.post(postData.id);
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
                {noButtons ? null : <LeftButton callback={GoToPreviousPost} post={prevPost} />}
                <PostMedia post={postData} noButtons={noButtons} />
                {noButtons ? null : <RightButton callback={GoToNextPost} post={nextPost} />}
            </PostContainer>
            <PostInfo post={postData}/>
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

    --BUTTON-WIDTH: 8rem;
`


const PostContainer = styled.div`
    width: 100%;
    height: 100%;
    user-select: none;
    
    background-color: var(--COLOR-BACKGROUND);
    border-bottom: #000 solid 1px;

    /* Flex */
    display:flex;
    flex-flow: column nowrap;
    justify-content: space-between;
`