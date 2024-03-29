import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import titleCase from "ap-style-title-case";
import Votes from "./Votes";


Info.propTypes = {
    post: PropTypes.object,
};
export default function Info({ post }) {
    let created_at = new Date(post.created_at * 1000).toDateString();
    let rating = titleCase(post.rating)
    return (
        <Container>
            <span>{created_at} - {rating}</span>
            <Votes post={post} key={post.id} />
        </Container>
    );
}

const Container = styled.div`
    height: fit-content;
    width: fit-content;
    padding: 0.5rem;
    white-space: nowrap;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
