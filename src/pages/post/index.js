import React, {useState,useEffect} from "react";
import { get } from "../../js/posts";
import "./post.css";
import SideBar from "./sidebar";
import Core from "../core";
import Media from "../../components/media";
import OpenGraphTags from "../../components/open_graph";
import { useParams } from "react-router-dom";

function Post(props) {
    let [post,setPost] = useState({});
    let [URL, setURL] = useState("https://example/test.jpg");
    
    const { id } = useParams();
    if (id === null) window.location.replace('/error');
    
    async function generatePost() {
        let post = await get(id)
        setPost(post);
        setURL(post.full.url);
    }
    
    useEffect(generatePost, []);
    let title = `Post ${id}`;
    let desc = `Open Booru Post: ${id}`;
    return (
        <Core title={title} description={desc}>
            <OpenGraphTags
                title={title}
                description={desc}
                image={URL}
            />
            <div id="post-page">
                <SideBar post={post} />
                <Media type={post.type} src={URL} />
            </div>
        </Core>
    );
}

export default Post;
