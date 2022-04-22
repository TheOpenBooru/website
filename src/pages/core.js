import React from 'react';
import {Helmet} from "react-helmet";
import NavBar from '../components/navigation_bar';

function Core(props) {
    let { title, description } = props;
    return (
        <div>
            <Helmet>
                {title ? <title>{title}</title> : null}
                {description ? <meta name="description" content={description} /> : null}
            </Helmet>
            <NavBar />
            {props.children}
        </div>
    );
}

export default Core;