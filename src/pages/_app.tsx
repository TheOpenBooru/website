import React from "react";
import NavigationBar from "components/NavigationBar";
import LegalPrompt from "components/LegalPrompt";
import "../styles/globals.css";
import "../styles/Lato.css";


function MyApp({ Component, pageProps }) {
    return (
        <>
            <LegalPrompt/>
            <NavigationBar/>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
