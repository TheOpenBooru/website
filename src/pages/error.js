import React from "react";
import Core from "./core";

function ErrorPage() {
    window.location.replace("/");
    return (
        <Core title="404 Error" description="404 Error page">
            <div className="bordered centered">
                404 Error - This page does not exist
            </div>
        </Core>
    );
}

export default ErrorPage;
