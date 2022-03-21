import React from 'react';
import NavBar from '../components/navigation_bar';

function Core(props) {
    return (
        <div>
            <NavBar/>
            {props.children}
        </div>
    );
}

export default Core;