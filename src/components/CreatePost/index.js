import React from "react";
import Redirects from "js/redirects";
import { Account, Posts } from "js/booru";
import styled from "styled-components";


export default function CreatePost() {
    async function FormHandler(e) {
        e.preventDefault();
        let file = e.target[0].files[0];

        if (file === undefined) {
            alert("Please Select a File")
        } else {
            try {
                let post = await Posts.create(file)
                window.location.href = Redirects.post(post.id);
            } catch (e) {
                if (e === Posts.PermissionError) {
                    alert("Error: You don't have the permission to do this")
                } else {
                    alert("Error: Unknown Error");
                }
            }
        }
    }

    
    return (
        <Container onSubmit={(e) => FormHandler(e)} style={{margin:".5rem"}}>
            <input type="file" content="Create Post" accept="video/*,image/*" />
            <br/>
            <input type="submit" value="Create"/>
        </Container>
    );
}

const Container = styled.form`
    padding: .5rem;

    /* Look */
    background-color: var(--BACKGROUND-3);
    border: .2em solid var(--BORDER-1);
    border-radius: 1rem;
`
