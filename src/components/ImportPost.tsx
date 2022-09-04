import React, { useRef, useState } from "react";
import { Errors, Posts } from "js/booru";
import styled from "styled-components";
import Captcha from "components/Captcha";
import LoadingIcon from "components/LoadingIcon";
import Redirects from "js/redirects";

export default function ImportPost() {
    let [captchaResponse, setCaptchaResponse] = useState(null);
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
        if (captchaResponse === null) {
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
            <label htmlFor="url">URL:</label>
            <input type="url" name="url" ref={urlRef} required/>
            <br />
            <br />
            <Captcha setCaptchaToken={setCaptchaResponse} />
            <br />
            {loading
                ? <LoadingContainer><LoadingIcon /></LoadingContainer>
                : <input type="submit" value="Create" />
            }
        </Form>
    );
}

const LoadingContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


const Form = styled.form`
    padding: 0.5rem;
    margin: 0.5rem;

    /* Look */
    background-color: var(--BACKGROUND-4);
    border: 0.2em solid var(--BORDER-1);
    border-radius: 1rem;
`;
