import React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import titleCase from "ap-style-title-case";
import Core from "containers/core";
import Redirects from "js/redirects";
import Booru from "js/booru";

export default function Profile() {
    let { data: profile, status } = useQuery("profile", Booru.Account.profile);

    if (Booru.Account.loggedIn === false) Redirects.goto(Redirects.home());
    if (status !== "success") {
        return null;
    } else {
        let dateString = new Date(profile.created_at * 1000).toLocaleDateString();
        return (
            <Core title="Open Booru: Profile" desc>
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
