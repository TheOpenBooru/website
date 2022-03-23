import React,{useState,useEffect} from "react";
import Core from "../core";
import "./post_search.css";
import { search } from "../../js/posts"
import Post from "./post_item";


function Posts() {
    let [posts, setPosts] = useState([]);
    
    useEffect(async () => {
        let params = new URLSearchParams(document.location.search);
        let query = params.get("query");
        let posts = await search(query)
        setPosts(posts || []);
    }, []);
    
    return (
        <Core title="Posts" description="Use this page to search for posts">
            <div className="post-list">
                {posts.map((post) => (
                    <Post data={post} key={post.id}/>
                ))}
            </div>
        </Core>
    );
}

export default Posts;
