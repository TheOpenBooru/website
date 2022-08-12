import React from "react";
import Head from "next/head";


const BaseTitle = process.env.SITE_NAME
const BaseDescription = process.env.SITE_DESCRIPTION

export default function HeadInfo({
        title = null as string,
        description = null as string,
        keywords = [] as Array<string>,
        image = null as string,
        video = null as string
        }): JSX.Element {
    return (
        <Head key="HeadInfo">
            {title
                ? <title>{BaseTitle} | {title}</title>
                : <title>{BaseTitle}</title>
            }
            {description
                ? <meta name="description" content={description + "\n" + BaseDescription}/>
                : <meta name="description" content={BaseDescription}/>
            }
            
            <meta name="keywords" content={keywords.join(", ")}/>
            <meta name="author" content="Ben Brady"/>

            <meta property="og:site_name " content="Open Booru" />
            {/* <meta property="og:url" content={document.location.href} /> */}
            {title ? <meta property="og:title" content={title} /> : null}
            {description ? <meta property="og:description" content={description} /> : null}
            
            {image ? <meta property="og:image" content={image} /> : null}
            {video ? <meta property="og:video" content={video} /> : null}
        </Head>
    )
}