import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/posts.js";
import Post from "./pages/post.js";
import CreatePost from "./pages/create_post";
import ErrorPage from "./pages/error";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/post" element={<Post />} />
            <Route path="/post/create" element={<CreatePost />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root"),
);
