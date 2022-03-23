import React from 'react';
import {Helmet} from "react-helmet";
import NavBar from '../components/navigation_bar';

function Core(props) {
    if (props.embed) {
        var ogElements = (
            <Helmet>
                <meta property="og:title" content={props.title} />
                <meta property="og:site_name " content="Open Booru" />
                <meta property="og:description" content={props.description} />
                <meta property="og:type" content="media.image" />
                <meta property="og:url" content={ document.location.href} />
                { props.image ? <meta property="og:image" content={props.image} /> : null }
            </Helmet>
        )
    }
    return (
        <div>
            {props.embed ? ogElements : null}
            <Helmet>
                <title>{`Open Booru - ${props.title}`}</title>
                <meta name="description" content={props.description} />
            </Helmet>
            <NavBar/>
            {props.children}
        </div>
    );
}

export default Core;