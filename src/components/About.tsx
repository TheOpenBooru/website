import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function About() {
    return (
        <div>
            OpenBooru is a modern booru framework written in Python attempting to supliment existing implementations.
            <br/>
            Sister Site:
            <Link href={"https://r34.pics"}>
                r34.pics
            </Link>
        </div>
    );
}
