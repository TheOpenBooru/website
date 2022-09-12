import React, { useEffect } from "react";
import Link from "next/link";
import styled from "styled-components";
import { Tags } from "js/booru";


function CallbackContainer({ namespace, callback, children }) {
    return (
        // @ts-ignore, styled-components prop
        <HoverableContainer namespace={namespace} onClick={callback}>
            {children}
        </HoverableContainer>
    )
}

function HrefContainer({ namespace, href, children }) {
    return (
        <Link href={href} prefetch={false} passHref>
            <a>
                {/* @ts-ignore, styled-components prop */}
                <HoverableContainer namespace={namespace}>
                    {children}
                </HoverableContainer>
            </a>
        </Link>
    )
}

export default function Tag({
    tag: tag_name,
    showCount = false as boolean,
    data = {} as object,
    href = null as string,
    callback = null as Function,
    children = null}) {
    
    // @ts-ignore, doesn't like ?. operator
    let namespace = data?.namespace ?? "generic"
    // @ts-ignore, doesn't like ?. operator
    let count = data?.count ?? 0

    let DynamicContainer;
    if (callback) {
        DynamicContainer = CallbackContainer;
    } else if (href) {Container
        DynamicContainer = HrefContainer;
    } else {
        DynamicContainer = Container;
    }
    
    return (
        <DynamicContainer namespace={namespace} href={href} callback={callback}>
            {/* @ts-ignore, styled-components prop */}
            <NameSpan namespace={namespace}>
                {tag_name}
            </NameSpan>
            {showCount ? `(${count})` : null}
            {children}
        </DynamicContainer>
    );
}


const Container = styled.span`
    display:flex;
    gap:.2rem;
    align-items: center;
    justify-content: left;

    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    
    
    text-decoration: none;
    width: fit-content;

    border: 0.1rem solid var(--BORDER-2);
    border-radius: 1rem;
    background: var(--BACKGROUND-4);
    
    padding: 0 0.3rem;
`;

const NameSpan = styled.span`
    
    ${/* @ts-ignore, styled-components prop */
        ({ namespace }) => {
        switch (namespace) {
            case "copyright":
                return `
                    color: #f0a0f0;
                `
            case "character":
                return `
                    color: #f0f0a0;
                `
            case "creator":
                return `
                    color: #f0a0a0;
                `
            case "meta":
                return `
                    color: #90D9ED;
                `
            default:
                return `
                    color: black;
                `
    }}}
`

const HoverableContainer = styled(Container)`
    cursor: pointer;

    &:hover{
        transition: ease-in all .2s;
        border-color: var(--BORDER-2-HOVER);
        background: var(--BACKGROUND-4-HOVER);
    }
`
