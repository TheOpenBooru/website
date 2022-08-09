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
            <link rel="preconnect" as="font" href="https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjxAwXjeu.woff2" type="font/woff2" crossOrigin="anonymous"/>
            <link rel="preconnect" as="font" href="https://fonts.gstatic.com/s/lato/v23/S6uyw4BMUTPHjx4wXg.woff2" type="font/woff2" crossOrigin="anonymous" />
            
            <title>{title}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords.join(", ")}/>
            <meta name="author" content="John Doe"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>

            <meta property="og:site_name " content="Open Booru" />
            {/* <meta property="og:url" content={document.location.href} /> */}
            {title ? <meta property="og:title" content={title} /> : null}
            {description ? <meta property="og:description" content={description} /> : null}
            
            {image ? <meta property="og:image" content={image} /> : null}
            {video ? <meta property="og:video" content={video} /> : null}
        </Head>
    )
}