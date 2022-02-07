import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/posts.js";
import Post from "./pages/post.js";
import Tags from "./pages/tags.js";
import Profile from "./pages/profile.js";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Posts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post" element={<Post />} />
            <Route path="/tags" element={<Tags />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root"),
);
