import React from "react";
import { create } from "../../js/posts.js";
import "./post_create.css";

function CreatePostBox(props) {
    let File_Input = React.createRef();
    function handleSubmit(event) {
        let files = File_Input.current.files;
        for (const file of files) {
            create(file);
        }
    }

    return (
        <div className="navbar-section bordered">
            <label htmlFor="image_file">Create Post:</label>
            <input
                className="post-create-input"
                name="image_file" type="file" multiple
                accept="image/png, image/jpeg, image/webp"
                ref={File_Input} />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default CreatePostBox;
