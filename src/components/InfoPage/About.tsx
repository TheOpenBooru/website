import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function About() {
    return (
        <div>
            Open Booru is a modern booru framework designed to replace existing implementations and allow for the creation of custom clients.
            <br />
            <br />
            Source Code:&nbsp;
            <Link href="https://github.com/TheOpenBooru">
                github.com/TheOpenBooru
            </Link>
            {/* <br/>
            Sister Site:
            <Link href={"https://r34.pics"}>
                r34.pics
            </Link> */}
        </div>
    );
}
