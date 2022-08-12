import React from "react";
import css from "styled-jsx/css";

export default function MissingPage() {
    return (
        <React.Fragment>
            <style jsx>{`
                h1 {
                    font-size: 5rem;
                    text-align: center;
                }
                h2 {
                    font-size: 2rem;
                    text-align: center;
                }
            `}</style>
            <div>
                <h1>404 - Page Not Found</h1>
                <h2>Oopsie Woopsie, We Could Not Find The Pagey Wagey</h2>
            </div>
        </React.Fragment>
    );
}
