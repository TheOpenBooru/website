import React from "react";
import Head from "next/head";


export default function HeadInfo({
        title = "" as string,
        description = "" as string,
        keywords = [] as Array<string>,
        image = "" as string,
        video = "" as string
        }): JSX.Element {
    return (
        <Head key="HeadInfo">
            
            <title>Open Booru | {title}</title>
            <meta name="description" content={description}/>
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