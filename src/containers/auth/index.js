import React from "react";
import Core from "containers/core";
import MessageBox from "components/MessageBox";
import LoginForm from "./LoginForm";

export default function Posts(props) {
    return (
        <Core title="Open Booru: Auth" description="Open Booru Login and Register, authentication">
            <MessageBox>
                <LoginForm/>
            </MessageBox>
        </Core>
    );
}
