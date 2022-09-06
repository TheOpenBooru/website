import React from "react";
import { GetServerSideProps } from "next";
import styled from "styled-components";
import HeadInfo from "components/HeadInfo";
import PostMedia from "components/PostMedia";
import PostInfo from "components/PostInfo";
import { Posts } from "js/booru";
import { Types } from "openbooru";


export const getServerSideProps: GetServerSideProps = async ({ query, res}) => {
    let { id } = query
    try {
        const post = await Posts.get(id)
        res.setHeader('Cache-Control',"max-age=60, public")
        return {
            props: { post },
        }
    } catch {
        return {
            notFound: true
        }
    }
}

type PostPageProps = {
    post: Types.Post
}
export default function PostPage({ post }:PostPageProps) {
    let HeadMedia =
        post.media_type === "video"
        ? { video: post.full.url }
        : { image: post.full.url }
    
    return (
        <>
            <HeadInfo
                title={`Post ${post.id} | ${post.tags.join(" ")}`}
                description={`Post ${post.id}, ${post.tags.join(" ")}`}
                keywords={post.tags}
                {...HeadMedia}
            />
            <Container>
                <MediaContainer>
                    <PostMedia post={post} />
                </MediaContainer>
                <PostInfo post={post}/>
            </Container>
        </>
    );
}


const Container = styled.div`
    position: relative;
    height: var(--PAGE-HEIGHT);
    width: 100%;
    top: 0;
    left: 0;
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
