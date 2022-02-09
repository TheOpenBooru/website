import React, {useState,useEffect} from "react";
import NavBar from "../components/navigation_bar";
import TagList from "../components/tag_list";
import PostInfo from "../components/post_data";
import { getPost} from "../js/posts.js";
import "../css/post.css";

function Post(props) {
    let [post,setPost] = useState({});
    let [URL,setURL] = useState("https://example/.jpg");
    let params = new URLSearchParams(document.location.search);
    let postID = params.get("id");
    if (!postID) document.location.href = '/';
    useEffect(() => {
        getPost(postID).then((post) => {
            setPost(post)
            setURL(post.full.url)
        });
    }, []);
    return (
        <div id="post-page">
            <NavBar />
            <div className="post-sidebar">
                <PostInfo post={post}/>
                <TagList tags={post.tags} />
            </div>
            <img className="post-image" src={URL} />
        </div>
    );
}

export default Post;
