import React, { useRef } from "react";
import Core from "containers/core";
import { Account } from "js/booru";
import "./auth.css";
import Redirects from "js/redirects";

export default function AccountPage(props) {
    let usernameRef = useRef(null);
    let passwordRef = useRef(null);
    let errorRef = useRef(null);

    function _RetriveInput() {
        let username = usernameRef.current.value;
        usernameRef.current.value = "";
        let password = passwordRef.current.value;

        passwordRef.current.value = "";
        return { username, password };
    }
    function showError(msg) {
        errorRef.current.value = msg;
    }

    function LoginCallback(e) {
        (async () => {
            e.preventDefault();
            let { username, password } = _RetriveInput();
            try {
                await Account.login(username, password);
                Redirects.goto(Redirects.profile());
            } catch (e) {
                showError(e.message);
            }
        })()
    }
    
    function RegisterCallback(e) {
        (async () => {
            e.preventDefault();
            let { username, password } = _RetriveInput();
            try {
                await Account.register(username, password);
                await Account.login(username, password);
                Redirects.goto(Redirects.profile());
            } catch (e) {
                alert(e);
                return;
            }
        })();
    }

    return (
        <Core title={"Open Booru: Login"} description={`Open Booru Login and Register`}>
            <div id="auth">
                <div>
                    <input type="username" placeholder="Username" ref={usernameRef} />
                    <br />
                    <input type="password" placeholder="Password" ref={passwordRef}/>
                    <br />
                    <span ref={errorRef} />
                </div>
                <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-around"}}>
                    <input type="submit" value="Login" onClick={LoginCallback}/>
                    <input type="submit" value="Register" onClick={RegisterCallback}/>
                </div>
            </div>
        </Core>
    );
}
