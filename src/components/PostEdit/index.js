import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TagEditor from "./TagEditor";
import SourceInput from "./SourceInput";
import RatingSelector from "./RatingSelector";
import Booru from "js/booru";

export default function PostEdit(props) {
    // let { post } = props;
    let [tags, setTags] = useState([]);
    let [source, setSource] = useState(null);
    let [ sourceInvalid, setSourceInvalid ] = useState(true);
    let [rating, setRating] = useState(null);
    

    useEffect(() => (async () => {
            let post = await Booru.Posts.get(1);
            setTags(post.tags);
            setSource(post.source);
            setRating(post.rating);
        })()
    , [],);

    return (
        <Container>
            <TagContainer>
                <TagEditor tags={tags} setTags={setTags} />
            </TagContainer>
            <div>
                <SourceInput source={source} setSource={setSource} setValid={setSourceInvalid} />
                <RatingSelector rating={rating} setRating={setRating} />
            </div>
            <SubmitButton>Submit</SubmitButton>
        </Container>
    );
}


const Container = styled.div`
    padding: 1rem;

    display: flex;
    flex-flow: row nowrap;
`;


const TagContainer = styled.div`
    height: 100%;
    width: 25rem;
`;


const SubmitButton = styled.button`
    height: 1.5rem;
    right:1rem;
    bottom:1rem;
`;
