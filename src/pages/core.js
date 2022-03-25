import React from 'react';
import {Helmet} from "react-helmet";
import NavBar from '../components/navigation_bar';

function Core(props) {
    return (
        <div>
            <Helmet>
                <title>{props.title}</title>
                <meta name="description" content={props.description} />
            </Helmet>
            <NavBar/>
            {props.children}
        </div>
    );
}

export default Core;