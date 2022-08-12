import React from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import HeadInfo from "components/HeadInfo";
import Media from "components/Media";
import PostInfo from "components/PostInfo";
import { Posts } from "js/booru";


export const getServerSideProps: GetServerSideProps = async (context) => {
    let { id } = context.query
    try {
        const post = await Posts.get(id)
        return {
            props: { post },
        }
    } catch {
        return {
            notFound: true
        }
    }
}


export default function PostPage({ post }) {
    let headAttrs = {
        title:`Open Booru: Post ${post.id}`,
        description:`Open Booru Post ${post.id}, ${post.tags.join(" ")}`,
        keywords:post.tags,
    }
    if (post.media_type === "video") {
        headAttrs['video'] = post.full.url
    } else {
        headAttrs['image'] = post.preview.url
    }
    return (
        <React.Fragment>
            <HeadInfo {...headAttrs} />
            <Container>
                <MediaContainer>
                    <Media type={post.media_type} full={post.full} preview={post.preview} />
                </MediaContainer>
                <PostInfo post={post}/>
            </Container>
        </React.Fragment>
    );
}


const Container = styled.div`
    height: var(--PAGE-HEIGHT);
    width: 100vw;
    overflow-y: auto;
    overflow-x: hidden;
`;


const MediaContainer = styled.div`
    height: calc(var(--PAGE-HEIGHT) - 1.5rem);
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
`;
