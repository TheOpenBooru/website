import React, { useState } from "react";
import Image from "next/future/image";
import { Types } from "openbooru";
import styled from "styled-components";




type MediaImageProps = {
    full: Types.Image,
    lazy?: boolean,
    preview?: Types.Image,
    thumbnail?: Types.Image,
}
export default function MediaImage({ full, preview, thumbnail, lazy, }: MediaImageProps) {
    let [useHiRes, setUseHiRes] = useState(!preview);
    let image = useHiRes ? full : preview
    image ??= full

    return (
        <SytledImage
            alt=""
            src={image.url}
            width={image.width}
            height={image.height}
            priority={!lazy}
            onLoad={() => setUseHiRes(true)}
        />
    )
}


const SytledImage = styled(Image)`
    width: 100%;
    height: 100%;
    object-fit: contain;
`;