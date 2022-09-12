import React, { useEffect, useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import TagEditor from "components/TagEditor";
import Captcha from "components/Captcha";
import SourceInput from "./SourceInput";
import RatingSelector from "./RatingSelector";
import { Types as BooruTypes } from "openbooru";
import { Types, Posts, Info } from "js/booru";

type PostEditProps = {
    post: BooruTypes.Post
};
export default function PostEdit({ post }:PostEditProps) {
    let [captcha, setCaptcha] = useState(null);
    let [tags, setTags] = useState(post.tags);
    let [source, setSource] = useState(post.source);
    let [rating, setRating] = useState(post.rating);


    const EMPTY_EDIT = new Types.PostEdit();
    async function AttemptEdit() {
        let edit = new Types.PostEdit();
        if (post.rating !== rating) edit.rating = rating;
        if (post.source !== source) edit.source = source;
        if (post.tags !== tags) edit.tags = tags;
        if (edit === EMPTY_EDIT) return;
        if (captcha === null) return;

        try {
            await Posts.edit(post.id, edit, captcha);
        } catch (err){
            alert("An Error has occured: " + err.message);
            return;
        }

        window.location.reload();
    }

    return (
        <Container>
            <TagContainer>
                <TagEditor baseTags={post.tags} setTags={setTags} />
            </TagContainer>
            <InputContainer>
                <SourceInput source={source} setSource={setSource} />
                <RatingSelector rating={rating} setRating={setRating} />
                <CaptchaContainer>
                    <Captcha setCaptchaToken={setCaptcha}/>
                </CaptchaContainer>
                <SubmitButton onClick={AttemptEdit}>Submit</SubmitButton>
            </InputContainer>
        </Container>
    );
}

const Container = styled.div`
    height: 100%;
    width: 50rem;
    padding: 1rem;

    display: flex;
    flex-flow: row nowrap;
`;

const InputContainer = styled.div`
    height: 100%;
    padding: .5rem;
    gap: .2rem;

    display: flex;
    flex-flow: column nowrap;
    align-content: space-between;
`;

const TagContainer = styled.div`
    height: 100%;
    width: 25rem;
`;

const CaptchaContainer = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`;

const SubmitButton = styled.button`
    position: relative;
    width: 100%;
    height: 1.5rem;
    left: 1rem;
    top: 1rem;
`;
