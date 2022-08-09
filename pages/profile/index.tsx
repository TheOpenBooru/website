import React, { useEffect } from "react";
import styled from "styled-components";
import useSWR from "swr";
import titleCase from "ap-style-title-case";
import Core from "components/Core";
import Redirects from "js/redirects";
import Booru from "js/booru";

export default function Profile() {
    let { data: profile, error } = useSWR("profile", Booru.Account.profile);

    if (error || !profile) {
        Redirects.goto(Redirects.posts());
    } else {
        let dateString = new Date(profile.created_at * 1000).toLocaleDateString();
        return (
            <Core title="Open Booru: Profile">
                <Username>{titleCase(profile.username)}</Username>
                <Rank>{titleCase(profile.level)}</Rank>
                <CreatedOn>Created On {dateString}</CreatedOn>
            </Core>
        );
    }
}

const Username = styled.h1`
    font-size: 6rem;
    margin: 1rem;
`;

const Rank = styled.h2`
    font-size: 3rem;
    margin: 1rem;
`;

const CreatedOn = styled.div`
    font-size: 1.5rem;
    margin: 1rem;
`;
