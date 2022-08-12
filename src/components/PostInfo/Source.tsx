import React from "react";
import styled from "styled-components";

export default function SourceEntry({ source }) {
    if (source) {
        let url = new URL(source);
        return (
            <Source href={source} title={url.hostname}>
                {source}
                <Icon src="/images/link.svg" height={10} width={10} />
            </Source>
        );
    } else {
        return <Source/>;
    }
}

const Source = styled.a`
    min-height: 1.2rem;
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
