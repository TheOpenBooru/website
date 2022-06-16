import React from "react";
import Core from "containers/core";
import Redirects from "js/redirects";
import { Account } from "js/booru";
import "./profile.css";

export default function Profile(props) {
    if (!Account.loggedIn) {
        Redirects.goto(Redirects.auth());
    }

    function logOut() {
        Account.logout();
        Redirects.goto(Redirects.auth());
    }

    return (
        <Core title={"Open Booru: Profile"} description={`Open Booru Profile Page`}>
            <div id="profile">
                <input id="profile-logout" type="button" value="Logout" onClick={logOut}/>
            </div>
        </Core>
    );
}
