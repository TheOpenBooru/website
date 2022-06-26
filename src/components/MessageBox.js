import React from "react";
import styled from "styled-components";

export default function MessageBox(props) {
    let attributes = { ...props }
    attributes.children = null;
    return (
        <Background {...attributes}>
            <MessageContainer id="messageBox">
                {props.children}
            </MessageContainer>
        </Background>
    );
}


const Background = styled.div`
    z-index: 1;
    position: absolute;
    height: 100vh;
    width: 100vw;
    left:0;
    
    display: flex;
    justify-content: center;
    align-items: center;
    transition: .05s ease-out;
    
    background-color: rgba(0,0,0,0.9);
    animation: fadeIn ease-in-out 0.1s;
`


const MessageContainer = styled.div`
    position: absolute;
    top:10%;
    height: min-content;
    width: min-content;
`
