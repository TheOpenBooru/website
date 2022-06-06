import React from "react";
import Helmet from "react-helmet";

export default function OpenGraphTags(props) {
    return (
        <Helmet>
            <meta property="og:title" content={props.title} />
            <meta property="og:site_name " content="Open Booru" />
            <meta property="og:description" content={props.description} />
            <meta property="og:url" content={document.location.href} />
            <meta property="og:image" content={props.image} />
            <meta property="og:video" content={props.video} />
        </Helmet>
    )
}