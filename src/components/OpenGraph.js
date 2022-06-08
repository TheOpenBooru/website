import React from "react";
import Helmet from "react-helmet";

export default function OpenGraphTags(props) {
    let { title, description, image, video} = props;
    return (
        <Helmet>
            <meta property="og:site_name " content="Open Booru" />
            <meta property="og:url" content={document.location.href} />
            {title ? <meta property="og:title" content={title} /> : null}
            {description ? <meta property="og:description" content={description} /> : null}
            
            {image ? <meta property="og:image" content={image} /> : null}
            {video ? <meta property="og:video" content={video} /> : null}
        </Helmet>
    )
}