import React from "react";
import Core from "containers/core";
import MessageBox from "components/MessageBox";
import LoginForm from "components/LoginForm";

export default function AccountPage(props) {
    return (
        <Core title={"Open Booru: Login"} description={`Open Booru Login and Register`}>
            <div id="auth">
                <MessageBox>
                    <LoginForm/>
                </MessageBox>
            </div>
        </Core>
    );
}
