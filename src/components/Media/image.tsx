import React from "react";
import Image from "next/image";
import { Types } from "openbooru";
import styled from "styled-components";

type MediaImageProps = {
    full: Types.Image,
    preview:Types.Image,
    lazy: boolean,
}
export default function MediaImage({ full, preview, lazy }: MediaImageProps) {
    return (
        <Container>
            <Image
                src={full.url}
                alt=""
                width={full.width}
                height={full.height}
                layout="responsive"
                
                
                priority={!lazy}
                placeholder={"blur"}
                blurDataURL={preview.url}
            />
        </Container>
    );
}

const Container = styled.div`
    width:  100%;
    height: 100%;

`