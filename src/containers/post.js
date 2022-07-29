import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Core from "containers/core";
import Media from "components/Media";
import PostInfo from "components/PostInfo";
import MessageBox from "components/MessageBox";
import LoadingIcon from "components/LoadingIcon";
import Booru from "js/booru";
import Redirects from "js/redirects";

export default function PostPage() {
    let { id } = useParams();
    if (id === undefined) window.location.replace(Redirects.home());
    const { data: post, status } = useQuery(`post-${id}`, async () => Booru.Posts.get(id));

    if (status === "error") {
        Redirects.goto(Redirects.home());
        return null;
    } else if (status === "loading") {
        return (
            <Core title={`Open Booru: Post ${id}`} description={`Open Booru Post ${id}`}/>
        );
    } else {
        const reload = () => window.location.reload();
        return (
            <Core
                title={`Open Booru: Post ${id}`}
                description={`Open Booru Post ${id}: ${post.tags.join(" ")}`}
            >
                <Container>
                    <MediaContainer>
                        <Media type={post.media_type} full={post.full} preview={post.preview} />
                    </MediaContainer>
                    <PostInfo post={post} reloadCallback={reload} />
                </Container>
            </Core>
        );
    }
}

const Container = styled.div`
    height: var(--PAGE-HEIGHT);
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
`;

const MediaContainer = styled.div`
    height: calc(100% - 1.5rem);
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
`;
