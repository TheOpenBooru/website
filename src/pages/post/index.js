import React, {useState,useEffect} from "react";
import SideBar from "./sidebar";
import Core from "../core";
import { get } from "../../js/posts";
import "./post.css";
import Video from "./video"

function Post(props) {
    let [post,setPost] = useState({});
    let [URL, setURL] = useState("https://example/test.jpg");
    
    async function generatePost() {
        let params = new URLSearchParams(document.location.search);
        let postID = params.get("id");
        if (postID === null) {
            // Redirect to home page
            document.location.href = '/';
        }
        let post = await get(postID)
        setPost(post);
        setURL(post.full.url);
    }

    useEffect(() => {
        generatePost();
        generatePost();
    }, []);


    let ImgElemt
    if (post.type === undefined) {
        ImgElemt = <div />
    } else if (post.type === "video") {
        ImgElemt = <Video src={URL}/>
    } else {
        ImgElemt = <img className="post-image" src={URL} alt="" />
    }
    return (
        <Core>
            <div id="post-page">
                <SideBar post={post} />
                {ImgElemt}
            </div>
        </Core>
    );
}

export default Post;
