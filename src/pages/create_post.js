import React from "react";
import NavBar from "../components/navigation_bar";

function CreatePost(props) {
    return (
        <div>
            <NavBar />
            <form action="http://slate:5725/posts/create" method="post" encType="multipart/form-data" target="_">
                <label htmlFor="image_file ">Image:</label>
                <input type="file" id="image_file" name="image_file "/>
                <br />
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}

export default CreatePost;
