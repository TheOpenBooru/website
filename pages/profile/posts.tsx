import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import titleCase from "ap-style-title-case";
import Redirects from "js/redirects";
import Booru from "js/booru";

export default function Posts({ profile }) {
    // let { data, status } = useQuery("profile-posts", getPosts, { enabled: Boolean(profile) });
    if (profile === null) return null;

    // async function getPosts() {
    //     let query = new Booru.Types.PostQuery();

    //     let ids = []
    //     ids = ids.concat(profile.posts)
    //     ids = ids.concat(profile.upvotes)
    //     ids = ids.concat(profile.downvotes)
    //     query.ids = ids

    //     let posts = await Booru.Posts.search(query);
    //     return posts
    // }

    if (Booru.Account.loggedIn === false) Redirects.goto(Redirects.home());
    let status = "error";
    if (status !== "loading") {
        return null;
    } else {
        return (
            <Container>
                <PostsTitle>Posts:</PostsTitle>
                <Posts>
                    {profile.posts.map((id) => (
                        <div>{id}</div>
                    ))}
                </Posts>
                <PostsTitle>Upvoted:</PostsTitle>
                <Posts>
                    {profile.upvotes.map((id) => (
                        <div>{id}</div>
                    ))}
                </Posts>
                <PostsTitle>Downvoted:</PostsTitle>
                <Posts>
                    {profile.downvotes.map((id) => (
                        <div>{id}</div>
                    ))}
                </Posts>
            </Container>
        );
    }
}

const Container = styled.div``;

const PostsTitle = styled.h3`
    margin: 1rem;
`;

const PostsCovers = styled.div`
    margin-left: 2rem;
`;
