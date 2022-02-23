import react from "react";
import React from "react";
import NavBar from "../components/navigation_bar";
import {createPost} from "../js/posts.js";


function CreatePost(props) {
    let File_Input = react.createRef();
    function handleSubmit(event) {
        let files = File_Input.current.files;
        for (const file of files) {
            createPost(file);
        }
    }

    return (
        <div>
            <NavBar />
            <div>
                <label htmlFor="image_file">Files:</label>
                <input name="image_file" type="file" ref={File_Input} multiple/><br />
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </div>
    );
}

export default CreatePost;
