import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import useMobile from "hooks/mobileHook";
import usePermission from "hooks/permissionHook";
import { Account } from "js/booru";
import Image from "next/image";

Buttons.propTypes = {
    editCallback: PropTypes.func,
    deleteCallback: PropTypes.func,
};
export default function Buttons({ editCallback, deleteCallback }) {
    let isMobile = useMobile();
    let canEdit = usePermission("canEditPosts");
    let canDelete = usePermission("canDeletePosts");
    return (
        <ButtonsContainer>
            {canEdit && isMobile === false ? (
                <Button onClick={editCallback}>
                    <ImageContainer>
                        <Image src="/images/edit.svg" alt="" layout="fill"/>
                    </ImageContainer>
                </Button>
            ) : null}
            {canDelete ? (
                <Button onClick={deleteCallback}>
                    <ImageContainer>
                        <Image src="/images/trash.svg" alt="" layout="fill"/>
                    </ImageContainer>
                </Button>
            ) : null}
        </ButtonsContainer>
    );
}

const ButtonsContainer = styled.div`
    margin: 0.5rem;
    height: 100%;

    display: flex;
    flex-flow: column nowrap;
    gap: 0.5rem;
`;

const ImageContainer = styled.div`
    width: 100%;
    height: 100%;
    filter: invert(0);
`

const Button = styled.div`
    width: 2rem;
    height: 2rem;

    display: flex;
    justify-content: center;
    align-items: center;
    
    cursor: pointer;
    background-color: var(--BACKGROUND-4);
    border-radius: 0.5rem;
    border: 0.2rem var(--BORDER-2) solid;
    padding: 0.2rem;
`;
