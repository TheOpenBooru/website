import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./containers/post";
import Posts from "./containers/posts";
import Auth from "./containers/auth";
import Settings from "./containers/settings";
import './index.css';

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="*" element={<Posts />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:layout" element={<Posts />} />
            <Route path="/post/:id" element={<Post />} />
            
            <Route path="/auth" element={<Auth />} />
            <Route path="/settings" element={<Settings />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById("root"),
);
