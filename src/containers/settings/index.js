import React from "react";
import Core from "containers/core";
import Settings from "./settings";

export default function Profile(props) {
    return (
        <Core title={"Open Booru: Settings"} description={`Open Booru Settings Manage and Edittor`}>
                <Settings/>
        </Core>
    );
}