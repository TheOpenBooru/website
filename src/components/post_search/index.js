import React,{useState,useEffect} from "react";
import { search } from "../../js/posts"
import Post from "./post_item";
import "./post_search.css";


function PostColumn(posts) {
    return (
        <div className="post-column">
            {posts.map((post) => (
                <Post data={post} key={post.id}/>
            ))}
        </div>
    )
}

function SplitArray(array, parts) {
    let buckets = Array.apply(null, Array(parts)).map(() => new Array());
    array.forEach((v, i) => {
        buckets[i % parts].push(v)
        console.log(buckets[i % parts])
        console.log(buckets)
    })
    return buckets;
}

export default function PostSearch() {
    let [posts, setPosts] = useState([]);
    useEffect( () => (async () => {
        let params = new URLSearchParams(document.location.search);
        let query = params.get("query");
        let posts = await search(query);
        setPosts(posts);
    })(), []);
    
    
    return (
        <div className="post-list">
            {SplitArray(posts,4).map(PostColumn)}
        </div>
    );
}
