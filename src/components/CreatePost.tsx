import React, { useRef, useState } from "react";
import { Errors, Posts } from "js/booru";
import styled from "styled-components";
import usePermission from "hooks/permissionHook";
import Captcha from "components/Captcha";
import LoadingIcon from "components/LoadingIcon";
import Redirects from "js/redirects";

export default function CreatePost() {
    let [captchaResponse, setCaptchaResponse] = useState(null);
    let {captcha: captchaRequired} = usePermission("canCreatePosts")
    let [loading, setLoading] = useState(false);
    let fileRef = useRef()


    function showText(msg) {
        alert(msg)
    }

    async function FormHandler(e) {
        e.preventDefault();
        if (!fileRef) return
        
        // @ts-ignore
        let file = fileRef.current.files[0]
        
        if (captchaRequired && captchaResponse === null) {
            showText("Please Solve the Captcha")
            return
        }
        
        setLoading(true);
        try {
            let post = await Posts.create(file, captchaResponse);
            Redirects.goto(Redirects.post(post.id))
        } catch (e) {
            setLoading(false)
            if (e === Errors.PermisionError) {
                showText("Error: Post Already Exists");
            } else if (e === Errors.PostAlreadyExists) {
                showText("Error: You don't have the permission to do this");
            } else {
                showText("Error: " + e.message);
            }
        }
    }

    return (
        <Container onSubmit={FormHandler}>
            <FileInput type="file" accept="video/*,image/*" ref={fileRef}/>
            <br />
            <br />
            { captchaRequired ? <Captcha setCaptchaToken={setCaptchaResponse} /> : null}
            <br />
            {loading
                ? <LoadingContainer><LoadingIcon /></LoadingContainer>
                : <Button type="submit" value="Create" />
            }
        </Container>
    );
}

const Container = styled.form`
    width: 30rem;
    height: 10rem;
    
    background-color: var(--BACKGROUND-4);
    border: 0.2em solid var(--BORDER-1);
    border-radius: 1rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`;

const LoadingContainer = styled.div`
    width: 100%;
    padding: 0.5rem;
    margin: 0.5rem;

    display: flex;
    align-items: center;
    justify-content: center;
`

const FileInput = styled.input`
    padding: 0.5rem;
    margin: 0.5rem;
    max-width: 20rem;
`

const Button = styled.input`
    bottom:0;
    width: 100%;

    cursor: pointer;
    user-select: none;

    background: var(--BACKGROUND-3);

    border: 0 solid var(--BORDER-1);
    border-top-width: 0.2rem;
    border-radius: 0 0 1rem 1rem;

    text-align: center;
    vertical-align: middle;
    line-height: 2rem;
    font-size: larger;

    & .active {
        border-color: var(--BORDER-2);
    }

    transition: all ease-out 0.1s;
    &:hover {
        background: var(--BACKGROUND-3-HOVER) !important;
    }
`