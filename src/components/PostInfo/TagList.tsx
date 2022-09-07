import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Tag from "components/Tag";
import useSWR from "swr";
import PropTypes from "prop-types";
import Redirects from "js/redirects";
import { Types, BSL, Tags } from "js/booru";

const NamespaceOrder = [
    "copyright",
    "creator",
    "character",
    "meta",
    "generic",
]

type Tag = {
    url: string;
    mimetype: string;
    height: number;
    width: number;
    type: string;
}
// function TagList({ tags = [] as Tag[] }) {
//     let { data, error } = useSWR("taglist-" + tags.join(''), async () => {
//         let tagsData = []
//         tags.forEach(async (tag) => {
//             let tagData = await Tags.get(tag);
//             tagsData.push(tagData)
//         })
//         return tagsData
//     })

//     if (status === "loading" || tags.length === 0) {
//         return <FallbackTagList key="tags-loading" tags={tags} />
//     } else {
//         let TagGroups = NamespaceOrder.map((namespace) => {
//             let tagGroup
//             tagGroup = data.filter((tag) => tag.namespace === namespace)
//             tagGroup = tagGroup.sort()
//             return tagGroup
//         })
//         console.log(tagGroup)
//         tags = tags.sort()
//         return (
//             <Container key={tags.join("")}>
//                 {TagGroups.map((tags) => (<>
//                     {tags.map((tag) => 
//                         <Tag key={tag} tag={tag.name} data={tag} href={create_link(tag)} />
//                     )}
//                 </>)
//                 )}
//             </Container>
//         );
//     }

// }

export default function FallbackTagList({ tags = [] as string[] }) {
    tags = tags.sort()
    return (
        <Container key={tags.join("")}>
            {tags.map((tag) => <Tag key={tag} tag={tag} href={create_link(tag)} />)}
        </Container>
    );
}


function create_link(tag: string) {
    let query = new Types.PostQuery();
    query.include_tags = [tag];
    let params = BSL.encode(query);
    let href = Redirects.search({ query: params });
    return href
}


const Container = styled.div`
    position: relative;
    min-height: 13rem;
    width: 100%;
    padding: 0.5rem;

    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-content: baseline;
    gap: 0.5rem;
`;
