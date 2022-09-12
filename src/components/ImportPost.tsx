import React, { useRef, useState } from "react";
import { Errors, Posts } from "js/booru";
import styled from "styled-components";
import usePermission from "hooks/permissionHook";
import Captcha from "components/Captcha";
import LoadingIcon from "components/LoadingIcon";
import Redirects from "js/redirects";

export default function ImportPost() {
    let [captchaResponse, setCaptchaResponse] = useState(null);
    let {captcha: captchaRequired} = usePermission("canCreatePosts")
    let [loading, setLoading] = useState(false);
    let urlRef = useRef()


    function showText(msg) {
        alert(msg)
    }

    async function FormHandler(e) {
        e.preventDefault();
        if (!urlRef.current) return;

        // @ts-ignore
        let url = urlRef.current.value
        if (captchaRequired && captchaResponse === null) {
            showText("Please Solve the Captcha")
        } else {
            try {
                setLoading(true);
                let posts = await Posts.Import(url, captchaResponse);
                let id = posts[0].id
                let href = Redirects.post(id)
                Redirects.goto(href)
            } catch (e) {
                if (e === Errors.PermisionError) {
                    showText("Error: You don't have the permission to do this");
                } else if (e === Errors.PostAlreadyExists) {
                    showText("Error: Post Already Exists");
                } else {
                    showText("Error: " + e.msg);
                }
                setLoading(false)
            }
        }
    }

    return (
        <Form onSubmit={FormHandler}>
            <URL>
                <label htmlFor="url">URL:</label>
                <URLInput type="url" name="url" ref={urlRef} required/>
            </URL>
            <br />
            <br />
            { captchaRequired ? <Captcha setCaptchaToken={setCaptchaResponse} /> : null }
            <br />
            {loading
                ? <LoadingContainer><LoadingIcon /></LoadingContainer>
                : <Button type="submit" value="Create" />
            }
        </Form>
    );
}

const Form = styled.form`
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

const URL = styled.div`
    width: 95%;
    margin: 0.5rem;
    padding: 0.5rem;
`

const URLInput = styled.input`
    width: calc(100% - 5rem);
`


const Button = styled.input`
    cursor: pointer;
    user-select: none;

    width: 100%;

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