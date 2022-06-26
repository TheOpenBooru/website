import React from "react";
import styled from "styled-components";
import { onLoadCallback } from "components/Media/image";
import Redirects from "js/redirects";
import "./columns.css";


export default function ColumnPosts(props) {
    let { posts } = props;

    return (
        <Column>
            {posts.map((post, i) => (
                <ColumnItem key={post.id} post={post} />
            ))}
        </Column>
    );
}


function ColumnItem(props) {
    let { post } = props;
    let { preview, thumbnail, media_type:type } = post

    let className = `media-${type}`;
    let redirect = Redirects.post(post.id);
    
    return (
        <ItemContainer className={className} href={redirect} title={`Post: ${post.id}`}>
            <Image
                className="columnsPosts-image"
                alt=""
                src={thumbnail.url}
                width={thumbnail.width}
                height={thumbnail.height}
                onLoad={preview ? onLoadCallback(preview,thumbnail,true) : null}
            />
        </ItemContainer>
    );
}


const Column = styled.div`
    width:var(--COLUMN-WIDTH);
    display: flex;
    margin: var(--IMAGE-MARGIN);
    flex-direction: column;
    align-items: center;
`

const ItemContainer = styled.a`
    width:100%;
    margin-bottom: var(--IMAGE-MARGIN);
`

const Image = styled.img`
    width:100%;
    height: auto;
    border-radius: 1rem;
    outline: .2rem solid var(--COLOR-2);
    background-color: var(--COLOR-2);
    transition: all 0.1s ease-in;
    &:hover{
        outline-color: var(--COLOR-3);
        outline-width: .3rem;
        border-radius: 2rem;
    }
`