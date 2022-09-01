import React from "react";
import styled from "styled-components";
import LoadingIcon from "components/LoadingIcon";
import Settings from "js/settings";


export function LeftButton({ callback, post }) {
    let img = GenerateImageUrl(post, "/images/left-arrow.svg");

    return (
        <LeftButtonContainer onClick={callback}>
            <Icon key={img} src={img} alt="" />
        </LeftButtonContainer>
    );
}

export function RightButton({ callback, post, loading, finished }) {
    let img = GenerateImageUrl(post, "/images/right-arrow.svg");

    return (
        <RightButtonContainer onClick={callback}>
            {!post && loading
                ? <LoadingIcon/>
                : <Icon key={img} src={img} alt="" />
            }
        </RightButtonContainer>
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
    /* margin-top: var(--BUTTON-WIDTH);
    height: calc(100% - var(--BUTTON-WIDTH)); */
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


const LeftButtonContainer = styled(ButtonContainer)`
    position: absolute;
    left: 0;
    `


const RightButtonContainer = styled(ButtonContainer)`
    position: absolute;
    right: 0;
    `


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
