import React from "react";
import styled from "styled-components";

export default function SourceEntry({ source }) {
    try {
        let url = new URL(source);
        return (
            <Container>
                <Span title={url.hostname}>
                    {source}
                    <StyledLink href={source}>
                        <Icon src="/images/link.svg" height={10} width={10} />
                    </StyledLink>
                </Span>
            </Container>
        );
    } catch {
        return <Container/>;
    }
}

const Container = styled.div`
    min-height: 1.2rem;
`

const Span = styled.span`
    color: #0c181d;
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const Icon = styled.img`
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    width: 0.8rem;
    height: 0.8rem;
`;

const StyledLink = styled.a`
    user-select: none;
    cursor: pointer;
`