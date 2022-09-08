import React from "react";
import Head from "next/head";


const SiteName = process.env.SITE_NAME
const SiteDescription = process.env.SITE_DESCRIPTION

export default function HeadInfo({
        title = null as string,
        description = null as string,
        keywords = [] as Array<string>,
        image = null as string,
        video = null as string,
        path = null as string,
}): JSX.Element {
    let OutputTitle = title ? `${SiteName} | ${title}` : SiteName
    let OutputDescription = description ? description + "\n" + SiteDescription : SiteDescription

    // TODO: Add Article Tags https://ogp.me/#type_article
    return (
        <Head key="HeadInfo">
            <title>{OutputTitle}</title>
            <meta name="description" content={OutputDescription}/>
            
            <meta name="keywords" content={keywords.join(", ")}/>
            <meta name="author" content="Ben Brady"/>

            <meta property="og:locale" content="en_US" />
            <meta property="og:site_name" content={SiteName} />
            <meta property="og:title" content={OutputTitle} />
            {image === null ? <meta property="og:description" content={OutputDescription} /> : null}
            {path ? <meta property="og:url" content={path} /> : null}
            {image ? <meta property="og:image" content={image} /> : null}
            {image ? <meta property="og:image:secure_url" content={image} /> : null}
            {video ? <meta property="og:video" content={video} /> : null}
        </Head>
    )
}