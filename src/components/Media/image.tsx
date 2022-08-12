import React from "react";
import Image from "next/image";
import { Types } from "openbooru";
import styled from "styled-components";


function UpdateImage(element, image, callback = null) {
    element.src = image.url;
    element.height = image.height;
    element.width = image.width;
    element.onload = callback;
}

/**
 * Shows a low quality image and then display a high quality version after finishing loading
 * @param  {Booru.Types.Image} full The full scale image
 * @param  {Booru.Types.Image} preview The preview "poster" to be shown
 * @param  {Boolean} lazy Should the high quality version be lazy loaded
 * @param  {Number} upscaleThreshold The increase in display resolution required to update the image
*/
export function onLoadCallback(full, preview, lazy = false, upscaleThreshold = 2) {
    return (e) => {
        let target = e.target;
        if (target.src === full.url) return;

        let element = target.getBoundingClientRect();
        let CurrentUpscalePercentage = Math.max(
            element.width / preview.width,
            element.height / preview.height
        );

        if (lazy) target.loading = "lazy";
        if (lazy === false || (CurrentUpscalePercentage > upscaleThreshold)) {
            UpdateImage(target,full);
        }
    }
}



type MediaImageProps = {
    full: Types.Image,
    preview:Types.Image,
    lazy: boolean,
}
export default function MediaImage({ full, preview, lazy }: MediaImageProps) {
    return (
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
    );
}
