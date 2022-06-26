import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./containers/post";
import Posts from "./containers/posts";
import Profile from "./containers/profile";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Posts />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:layout" element={<Posts />} />
            <Route path="/post/:id" element={<Post />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root"),
);
