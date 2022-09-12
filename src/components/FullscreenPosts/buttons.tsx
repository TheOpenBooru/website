import React from "react";
import styled from "styled-components";
import LoadingIcon from "components/LoadingIcon";
import Settings from "js/settings";


export function LeftButton({ callback, post }) {
    let img = GenerateImageUrl(post, "/images/left-arrow.svg");

    return (
        <ButtonContainer onClick={callback}>
            <Icon src={img} alt="" />
        </ButtonContainer>
    );
}

export function RightButton({ callback, post, loading }) {
    let img = GenerateImageUrl(post, "/images/right-arrow.svg");

    return (
        <ButtonContainer onClick={callback}>
            {!post && loading
                ? <LoadingIcon/>
                : <Icon src={img} alt="" />
            }
        </ButtonContainer>
    );
}


function GenerateImageUrl(post, defaultImage) {
    if (!post) {
        return null
    } else {
        let isPreviewEnabled = Settings.fullscreenPostPreviews
        return isPreviewEnabled ? post.thumbnail.url : defaultImage
    }
}


const ButtonContainer = styled.div`
    height: 100%;
    width: var(--BUTTON-WIDTH);
    
    /* Look */
    outline: solid 1px #000;
    background-color: var(--BACKGROUND-2);

    /* Center Children (Icon) */
    display: flex;
    align-items: center;
    justify-content: center;
`;


const Icon = styled.img`
    max-height: 50%;
    width: 90%;
    padding: .5rem;
    object-fit: cover;
    ${ButtonContainer}:active > &{
        width: 80%;
        transition: 0.05s;
        filter: drop-shadow(2px 2px 2px #000);
    }
`
