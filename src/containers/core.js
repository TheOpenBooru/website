import React from "react";
import { Helmet } from "react-helmet";
import OpenGraph from "components/OpenGraph";
import NavigationBar from "components/NavigationBar";
import titleCase from "ap-style-title-case";

function Core({ title, description, image, video, ...props }) {
    title = titleCase(title);
    return (
        <React.Fragment>
            <Helmet>
                {title ? <title>{title}</title> : null}
                {description ? <meta name="description" content={description} /> : null}
            </Helmet>
            <OpenGraph title={title} description={description} image={image} video={video} />
            <NavigationBar />
            {props.children}
        </React.Fragment>
    );
}

export default Core;
