import React, { useRef, useState } from "react";
import { Errors, Posts } from "js/booru";
import styled from "styled-components";
import Captcha from "components/Captcha";
import LoadingIcon from "components/LoadingIcon";

export default function CreatePost() {
    let [captchaResponse, setCaptchaResponse] = useState(null);
    let [loading, setLoading] = useState(false);
    let fileRef = useRef()


    function showText(msg) {
        alert(msg)
    }

    async function FormHandler(e) {
        e.preventDefault();
        let file = fileRef.current.files[0]
        
        if (captchaResponse === null) {
            showText("Please Solve the Captcha")
        } else {
            try {
                setLoading(true);
                await Posts.create(file,captchaResponse);
                window.location.reload();
            } catch (e) {
                if (e === Errors.PermisionError) {
                    showText("Error: You don't have the permission to do this");
                } else if (e === Errors.PostAlreadyExists) {
                    showText("Error: Post Already Exists");
                } else {
                    showText("Error: " + e.toString());
                }
                setLoading(false)
            }
        }
    }

    return (
        <Container onSubmit={FormHandler}>
            <input type="file" content="Create Post" accept="video/*,image/*" ref={fileRef} />
            <br />
            <br />
            <Captcha setCaptchaToken={setCaptchaResponse} />
            <br />
            {loading ? <LoadingIcon /> : <input type="submit" value="Create" />}
        </Container>
    );
}

const Container = styled.form`
    padding: 0.5rem;
    margin: 0.5rem;

    /* Look */
    background-color: var(--BACKGROUND-3);
    border: 0.2em solid var(--BORDER-1);
    border-radius: 1rem;
`;
