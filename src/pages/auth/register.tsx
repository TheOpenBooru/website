import React from "react";
import AuthPage from "components/AuthPage";
import HeadInfo from "components/HeadInfo";

export default function Register(){
    return (
        <>
            <HeadInfo title="Register" keywords={["Register", "Account", "Authentication"]} />
            <AuthPage mode="register"/>
        </>
    )
}