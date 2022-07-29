import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Account, Posts } from "js/booru";
import { useQuery } from "react-query";

Votes.propTypes = {
    post: PropTypes.object,
};
export default function Votes({ post }) {
    let [downvoted, setDownvoted] = useState(false);
    let [upvoted, setUpvoted] = useState(false);

    useEffect(() => {
        (async () => {
            if (Account.loggedIn) {
                let profile = await Account.profile(false);
                setUpvoted(profile.upvotes.includes(post.id))
                setDownvoted(profile.downvotes.includes(post.id))
            }
        })()
    },[])

    let upvoteUrl = upvoted
        ? "/images/thumbs-up-solid.svg"
        : "/images/thumbs-up-regular.svg";
    let downvoteUrl = downvoted
        ? "/images/thumbs-down-solid.svg"
        : "/images/thumbs-down-regular.svg";
    
    const upvoteCallback = () => {
        if (!Account.loggedIn) return;
        if (upvoted) {
            setUpvoted(false);
            Posts.RemoveUpvote(post.id)
        } else {
            setUpvoted(true);
            Posts.AddUpvote(post.id)
            if (downvoted) setDownvoted(false)
        }
    };
    
    const downvoteCallback = () => {
        if (!Account.loggedIn) return;
        if (downvoted) {
            setDownvoted(false)
            Posts.RemoveDownvote(post.id)
        } else {
            setDownvoted(true)
            if (upvoted) setUpvoted(false);
            Posts.AddDownvote(post.id)
        }
    };
    
    return (
        <Container>
            <VoteContainer>
                <VoteIcon src={upvoteUrl} alt="Upvote" onClick={upvoteCallback} style={{cursor: Account.loggedIn ? "pointer" : null}} />
                <span>{(post.upvotes + upvoted).toLocaleString('en-US')}</span>
            </VoteContainer>
            <VoteContainer>
                <VoteIcon src={downvoteUrl} alt="Downvote" onClick={downvoteCallback} style={{cursor: Account.loggedIn ? "pointer" : null}} />
                <span>{(post.downvotes + downvoted).toLocaleString('en-US')}</span>
            </VoteContainer>
        </Container>
    );
}

const Container = styled.div`
    margin: 1rem;
    display: flex;
    flex-flow: nowrap row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const VoteContainer = styled.div`
    display: flex;
    flex-flow: nowrap column;
    align-items: center;
`;

const VoteIcon = styled.img`
    height: 3rem;
    width: 3rem;
`;
