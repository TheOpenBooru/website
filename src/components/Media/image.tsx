import React, { useState } from "react";
import Image from "next/future/image";
import { Types } from "openbooru";
import styled from "styled-components";




type MediaImageProps = {
    full: Types.Image,
    lazy?: boolean,
    preview?: Types.Image,
}
export default function MediaImage({ full, lazy, preview }: MediaImageProps) {
    let [useHiRes, setUseHiRes] = useState(!preview);
    let image = useHiRes ? full : preview
    image ??= full

    return (
        <SytledImage
            alt=""
            src={full.url}
            width={full.width}
            height={full.height}
            priority={!lazy}

            // onLoad={() => setUseHiRes(true)}
        />
    )
}


const SytledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;