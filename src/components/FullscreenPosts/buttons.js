import React from "react";
import styled from "styled-components";
import Settings from "js/settings";


export function LeftButton(props) {
    let { callback, post } = props;
    let img = GenerateImageUrl(post, "/images/left-arrow.svg");

    return (
        <LeftButtonContainer onClick={callback}>
            <Icon src={img} alt="" />
        </LeftButtonContainer>
    );
}


export function RightButton(props) {
    let { callback, post } = props;
    let img = GenerateImageUrl(post, "/images/right-arrow.svg");

    return (
        <RightButtonContainer onClick={callback}>
            <Icon src={img} alt="" />
        </RightButtonContainer>
    );
}


function GenerateImageUrl(post, defaultImage) {
    if (!post) {
        return null
    } else {
        let isPreviewEnabled = Settings.fullscreenPostPreviews
        return isPreviewEnabled ? defaultImage : post.thumbnail.url
    }
}


const ButtonContainer = styled.div`
    height: 100%;
    width: var(--BUTTON-WIDTH);

    /* Look */
    outline: solid 1px #000;
    background-color: var(--COLOR-1);
    
    /* Center Children (Icon) */
    display: flex;
    align-items: center;
    justify-content: center;
`


const LeftButtonContainer = styled(ButtonContainer)`
    position: absolute;
    left: 0;
    `


const RightButtonContainer = styled(ButtonContainer)`
    position: absolute;
    right: 0;
    `


const Icon = styled.img`
    width: 90%;
    padding: .5rem;
    object-fit: contain;
    ${ButtonContainer}:active > &{
        width: 80%;
        transition: 0.05s;
        filter: drop-shadow(2px 2px 2px #000);
    }
`
