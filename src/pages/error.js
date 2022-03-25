import React from "react";
import Core from "./core";

function ErrorPage() {
    if (window.location.pathname === "/error") window.location.replace("/error");
    return (
        <Core title="404 Error" description="404 Error page">
            <div className="bordered">
                404 Error - This page does not exist
            </div>
        </Core>
    );
}

export default ErrorPage;
