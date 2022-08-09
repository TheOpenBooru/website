import React from "react";
import styled from "styled-components";
import HeadInfo from "components/HeadInfo";
import Media from "components/Media";
import PostInfo from "components/PostInfo";
import Booru from "js/booru";


export async function getServerSideProps(context) {
    let { id } = context.query
    try {
        const post = await Booru.Posts.get(id)
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
    
    return (
        <React.Fragment>
            <HeadInfo
                title={`Open Booru: Post ${post.id}`}
                description={`Open Booru Post ${post.id}, ${post.tags.join(" ")}`}
                keywords={post.tags}
            />
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
    /* height: calc(100% - 1.5rem); */
    width: 100vw;

    display: flex;
    align-items: center;
    justify-content: center;
`;
