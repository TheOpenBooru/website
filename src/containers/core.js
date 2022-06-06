import React from "react";
import { Helmet } from "react-helmet";
import NavigationBar from "../components/NavigationBar";
import titleCase from "ap-style-title-case";

function Core(props) {
    let { title, description } = props;
    title = titleCase(title);
    return (
        <div>
            <Helmet>
                {title ? <title>{title}</title> : null}
                {description ? <meta name="description" content={description} /> : null}
            </Helmet>
            <NavigationBar />
            {props.children}
        </div>
    );
}

export default Core;