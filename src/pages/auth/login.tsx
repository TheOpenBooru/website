import React from "react";
import AuthPage from "components/AuthPage";
import HeadInfo from "components/HeadInfo";

export default function Login(){
    return (
        <>
            <HeadInfo title="Login" keywords={["Login", "Account", "Authentication"]} />
            <AuthPage mode="login"/>
        </>
    )
}