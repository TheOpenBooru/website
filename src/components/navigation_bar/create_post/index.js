import React from "react";
import { create } from "../../../js/posts.js";
import "./index.css";

export default function CreatePostBox(props) {
    let File_Input = React.createRef();
    function handleSubmit(event) {
        let file = File_Input.current.files[0];
        create(file);
    }

    return (
        <div className={props.className}>
            <label htmlFor="image_file">Create Post:</label>
            <input
                className="post-create-input"
                name="image_file" type="file"
                accept="image/*, video/*"
                ref={File_Input} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}
