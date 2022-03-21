import React,{useState,useEffect} from "react";
import Core from "./core";
import "../css/post_search.css";
import { search } from "../js/posts"

function Post(props) {
    let data = props.data;
    return (
        <a href={`/post?id=${data.id}`}>
            <img
                height={data.thumbnail.height} width={data.thumbnail.width} 
                src={data.thumbnail.url}
                alt=""
                loading="lazy"
            />
        </a>
    );
}

function Posts() {
    let [posts, setPosts] = useState([]);
    
    useEffect(async () => {
        let params = new URLSearchParams(document.location.search);
        let query = params.get("query");
        let posts = await search(query)
        setPosts(posts || []);
    }, []);
    
    return (
        <Core>
            <div className="post-list">
                {posts.map((post) => (
                    <Post data={post} key={post.id}/>
                ))}
            </div>
        </Core>
    );
}

export default Posts;
