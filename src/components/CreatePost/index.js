import React from "react";
import Redirects from "js/redirects";
import { Account, Posts } from "js/booru";
import styled from "styled-components";


export default function CreatePost() {
    async function FormHandler(e) {
        e.preventDefault();

        if (!Account.loggedIn) {
            alert("You must be logged in to create a post");
            Redirects.goto(Redirects.login);
            return;
        }

        let fileInput = e.target[0];
        let file = fileInput.files[0];
        try {
            let post = await Posts.create(file)
            window.location.href = Redirects.post(post.id);
        } catch (e){
            alert(e);
            return
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
    background-color: var(--COLOR-2);
    border: .2em solid var(--COLOR-4);
    border-radius: 1rem;
`
