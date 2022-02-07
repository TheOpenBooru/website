import { React, useState, useEffect} from "react";
import "../css/postlist.css";
import { getPosts }  from "../js/posts"

function Post(props) {
    return (
        <a alt="Example Post" href="/post">
            <img alt="Post" src="https://thispersondoesnotexist.com/image" />
        </a>
    );
}

function PostList() {
    const [posts, setPosts] = useState([]);
    useEffect(() => { 
        setPosts(getPosts());
    },[])
    return <div class="post-list">{posts.map(Post)}</div>;
}

export default PostList;
