import React from "react"
import styled from "styled-components"
import PropTypes from "prop-types"
import useMobile from "js/mobileHook";
import { Account } from "js/booru"

Buttons.propTypes = {
    editCallback: PropTypes.func,
    deleteCallback: PropTypes.func,
}
export default function Buttons({ editCallback, deleteCallback }) {
    let isMobile = useMobile();
    return (
        <ButtonContainer>
            {Account.level !== "annonomous" && isMobile === false
                ? <Button src="/images/edit.svg" alt="Edit Post" onClick={editCallback} />
                : null
            }
            {Account.level === "admin"
                ? <Button src="/images/trash.svg" alt="Delete Post" onClick={deleteCallback}/>
                : null
            }
        </ButtonContainer>
    )
}


const ButtonContainer = styled.div`
    margin: .5rem;
    height: 100%;
    
    display:flex;
    flex-flow: row nowrap;
    gap: .5rem;
`


const Button  = styled.img`
    width: 1.8rem;
    height: 1.8rem;
    
    cursor: pointer;
    background-color: var(--BACKGROUND-4);
    border-radius: 0.5rem;
    border: 0.2rem var(--BORDER-2) solid;
    padding: 0.2rem;
`