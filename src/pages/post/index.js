import React, {useState,useEffect} from "react";
import { get } from "../../js/posts";
import "./post.css";
import SideBar from "./sidebar";
import Core from "../core";
import Media from "../../components/media";

function Post(props) {
    let [post,setPost] = useState({});
    let [URL, setURL] = useState("https://example/test.jpg");
    
    let params = new URLSearchParams(document.location.search);
    let postID = params.get("id");
    if (postID === null) window.location.replace('/error');
    
    async function generatePost() {
        let post = await get(postID)
        setPost(post);
        setURL(post.full.url);
    }
    
    useEffect(generatePost, []);
    return (
        <Core
            title={`Post ${postID}`}
            description={`Open Booru Post: ${postID}`}
            embed
            image={URL}
            >
            <div id="post-page">
                <SideBar post={post} />
                <Media type={post.type} src={URL} />
            </div>
        </Core>
    );
}

export default Post;
