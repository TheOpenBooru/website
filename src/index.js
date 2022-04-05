import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./pages/posts";
import Post from "./pages/post";
import ErrorPage from "./pages/error";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route index element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/post/:id" element={<Post/>} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root'),
);
