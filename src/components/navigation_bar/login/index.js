import React from "react";


export default function Login() {
    let token = localStorage.getItem("token");
    if (token) {
        return <i>NAME</i>;
    }
    function promptLogin(e) {
        let username = prompt("Username:");
        let password = prompt("Password:");
    }

    return (
        <button onClick={promptLogin}>
            Login
        </button>
    );
}
