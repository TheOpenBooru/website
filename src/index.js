import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./pages/post";
import Posts from "./pages/posts";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:layout" element={<Posts />} />
            <Route path="/post/:id" element={<Post />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root'),
);
