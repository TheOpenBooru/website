import React from "react";
import Head from "next/head";

const SiteUrl = process.env.SITE_URL
const SiteName = process.env.SITE_NAME
const SiteDescription = process.env.SITE_DESCRIPTION

type Media = {
    url: string,
    height: number,
    width: number,
}
export default function HeadInfo({
        title = null as string,
        description = null as string,
        keywords = [] as Array<string>,
        image = null as Media,
        video = null as Media,
        path = null as string,
}): JSX.Element {
    let RenderedTitle = title ? `${SiteName} | ${title}` : SiteName
    let RenderedDescription = description ? description + "\n" + SiteDescription : SiteDescription

    // TODO: Add Article Tags https://ogp.me/#type_article
    return (
        <Head key="HeadInfo">
            <title>{RenderedTitle}</title>
            <meta name="description" content={RenderedDescription} />
            <meta name="keywords" content={keywords.join(", ")}/>
            <meta name="author" content="Ben Brady" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
            
            {path ? <link rel="canonical" href={SiteUrl + path} /> : null}

            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={SiteName} />
            <meta property="og:title" content={RenderedTitle} />
            <meta property="og:description" content={RenderedDescription} />
            {path ? <meta property="og:url" content={path} /> : null}

            {image ? <meta property="og:image" content={image.url} /> : null}
            {image ? <meta property="og:image:width" content={image.width.toString()} /> : null}
            {image ? <meta property="og:image:height" content={image.height.toString()} /> : null}
            {image ? <meta property="og:image:secure_url" content={image.url} /> : null}
            {video ? <meta property="og:video" content={video.url} /> : null}

            <meta property="twitter:title" content={RenderedTitle} />
            <meta property="twitter:description" content={RenderedDescription}/>
            {path ? <meta property="twitter:url" content={SiteUrl + path} /> : null}

            {image ? <meta property="twitter:card" content="summary_large_image" /> : null}
            {image ? <meta property="twitter:image" content={image.url} /> : null}
            
            {video ? <meta property="twitter:card" content="player" /> : null}
            {video ? <meta property="twitter:player" content={video.url} /> : null}
            {video ? <meta property="twitter:player:width" content={video.width.toString()} /> : null}
            {video ? <meta property="twitter:player:height" content={video.height.toString()} /> : null}
            
            
        </Head>
    )
}