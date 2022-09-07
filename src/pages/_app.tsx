import React from "react";
import NavigationBar from "components/NavigationBar";
import "../styles/globals.css";
import "../styles/Lato.css";


function MyApp({ Component, pageProps }) {
    return (
        <>
            <NavigationBar/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
