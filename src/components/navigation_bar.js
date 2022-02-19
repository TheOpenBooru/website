import React from 'react';
import '../css/nav_bar.css';

function NavBar() {
    function SearchBoxKeypress(e) {
        if (e.code !== "Enter") return;
        window.location.href = `/posts?query=${e.target.value}`;
    }
    return (
        <nav id="navigation-bar">
            <a title="Profile" href="/profile">
                <img className="" src="/icons/profile..svg" alt=""/>
                <span>Profile</span>
            </a>
            <a title="Tags" href="/tags">
                <img className="" src="/icons/tags.svg" alt=""/>
                <span>Tags</span>
            </a>
            <a title="Posts" href="/posts">
                <img className="" src="/icons/posts.svg" alt=""/>
                <span>Posts</span>
            </a>
            <a title="Create" href="/post/create">
                <span>Create Post</span>
            </a>
            <div>
                <span>Post Search:</span>
                <input type="text" onKeyPress={SearchBoxKeypress}></input>
            </div>
        </nav>
    );
}

export default NavBar;