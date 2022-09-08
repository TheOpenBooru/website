import React from "react";
import Head from "next/head";

const SiteUrl = process.env.SITE_URL
const SiteName = process.env.SITE_NAME
const SiteDescription = process.env.SITE_DESCRIPTION

type Image = {
    url: string,
    mimetype: string,
    height: number,
    width: number,
    type: string,
}
export default function HeadInfo({
        title = null as string,
        description = null as string,
        keywords = [] as Array<string>,
        image = null as Image,
        video = null as string,
        path = null as string,
}): JSX.Element {
    let OutputTitle = title ? `${SiteName} | ${title}` : SiteName
    let OutputDescription = description ? description + "\n" + SiteDescription : SiteDescription

    // TODO: Add Article Tags https://ogp.me/#type_article
    return (
        <Head key="HeadInfo">
            <title>{OutputTitle}</title>
            <meta name="description" content={OutputDescription} />
            <meta name="keywords" content={keywords.join(", ")}/>
            <meta name="author" content="Ben Brady" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico"/>
            
            {path ? <link rel="canonical" href={SiteUrl + path} /> : null}

            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={SiteName} />
            <meta property="og:title" content={OutputTitle} />
            <meta property="og:description" content={OutputDescription} />
            {path ? <meta property="og:url" content={path} /> : null}
            {image ? <meta property="og:image" content={image.url} /> : null}
            {image ? <meta property="og:image:width" content={image.width.toString()} /> : null}
            {image ? <meta property="og:image:height" content={image.height.toString()} /> : null}
            {image ? <meta property="og:image:secure_url" content={image.url} /> : null}
            {video ? <meta property="og:video" content={video} /> : null}
        </Head>
    )
}