import React from "react";
import process from "process";
import NavigationBar from "components/NavigationBar";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query-devtools";
import "../styles/globals.css";
import "../styles/Lato.css";


const queryClient = new QueryClient({});

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <NavigationBar/>
            <Component {...pageProps} />
        </QueryClientProvider>
    );
}

export default MyApp;
