import React, { useState } from "react";
import styled from "styled-components";
import Booru from "js/booru";

export default function EditMenu(props) {
    let { post } = props;
    let [rating, setRating] = useState(post.rating);
    let [source, setSource] = useState(post.source);
    let [tags, setTags] = useState(post.tags);

    function performEdit() {
        let edit = new Booru.Types.PostEdit();
        if (rating !== post.rating) {
            edit.rating = rating;
        }
        if (source !== post.source) {
            edit.source = source;
        }
        if (edit === new Booru.Types.PostEdit()) return;
        Booru.Posts.edit(edit);
    }

    return (
        <Container>
            <div>
                <span>Rating:</span>
            </div>
            <div>
                Source:
                <SourceInput
                    type={"url"}
                    value={source}
                    onChange={(e) => setSource(e.target.value)}
                />
            </div>
            <div>
                <SubmitButton onClick={performEdit}>Edit</SubmitButton>
            </div>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    min-height: 10rem;

    display: flex;

    flex-flow: row;
    justify-content: center;
    align-items: baseline;

    & > * {
        display: flex;
        flex-flow: column;
        justify-content: center;
        align-items: center;
    }
`;

const SourceInput = styled.input`
    width: 25rem;
`;

const SubmitButton = styled.button``;
