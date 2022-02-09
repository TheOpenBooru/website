import React, {useState,useEffect} from "react";
import "../css/post_list.css";
import { getPosts } from "../js/posts"

function Post(props) {
    let data = props.data;
    return (
        <a href={`/post?id=${data.id}`}>
            <img
                height={data.thumbnail.height} width={data.thumbnail.width} 
                src={data.thumbnail.url}
            />
        </a>
    );
}

function PostList(props) {
    let [posts, setPosts] = useState([]);
    useEffect(() => {
        let params = new URLSearchParams(document.location.search);
        let query = params.get("query");
        getPosts(query).then(posts => setPosts(posts));
        }, []);
    return (
        <div className="post-list">
            {posts.map((post) => (
                <Post data={post}/>
            ))}
        </div>
    );
}

export default PostList;