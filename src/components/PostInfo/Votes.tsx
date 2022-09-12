import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "next/image";
import FutureImage from "next/future/image";
import { Account, Posts } from "js/booru";

Votes.propTypes = {
    post: PropTypes.object,
};
export default function Votes({ post }) {
    let [downvoted, setDownvoted] = useState(false);
    let [upvoted, setUpvoted] = useState(false);

    useEffect(() => {
        (async () => {
            if (Account.Store.loggedIn) {
                let profile = await Account.profile(false);
                setUpvoted(profile.upvotes.includes(post.id));
                setDownvoted(profile.downvotes.includes(post.id));
            }
        })();
    }, [post]);

    let upvoteUrl = upvoted ? "/images/thumbs-up-solid.svg" : "/images/thumbs-up-regular.svg";
    let downvoteUrl = downvoted
        ? "/images/thumbs-down-solid.svg"
        : "/images/thumbs-down-regular.svg";

    const upvoteCallback = () => {
        if (!Account.Store.loggedIn) return;
        if (upvoted) {
            setUpvoted(false);
            Posts.RemoveUpvote(post.id);
        } else {
            setUpvoted(true);
            Posts.AddUpvote(post.id);
            if (downvoted) setDownvoted(false);
        }
    };

    const downvoteCallback = () => {
        if (!Account.Store.loggedIn) return;
        if (downvoted) {
            setDownvoted(false);
            Posts.RemoveDownvote(post.id);
        } else {
            setDownvoted(true);
            if (upvoted) setUpvoted(false);
            Posts.AddDownvote(post.id);
        }
    };

    return (
        <Container>
            <VoteContainer>
                <VoteIcon
                    src={upvoteUrl}
                    alt="Upvote"
                    width={20}
                    height={20}
                    priority={true}
                    onClick={upvoteCallback}
                    style={{ cursor: Account.Store.loggedIn ? "pointer" : null }}
                />
                <span>{(post.upvotes + upvoted).toLocaleString("en-US")}</span>
            </VoteContainer>
            <VoteContainer>
                <VoteIcon
                    src={downvoteUrl}
                    alt="Downvote"
                    width={20}
                    height={20}
                    priority={true}
                    onClick={downvoteCallback}
                    style={{ cursor: Account.Store.loggedIn ? "pointer" : null }}
                />
                <span>{(post.downvotes + downvoted).toLocaleString("en-US")}</span>
            </VoteContainer>
        </Container>
    );
}

const Container = styled.div`
    width: fit-content;
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

const VoteIcon = styled(FutureImage)`
    height: 4rem;
    width: 4rem;
`;
