import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "containers/post";
import Posts from "containers/posts";
import Auth from "containers/auth";
import Profile from "containers/profile";
import "./index.css";

export const queryClient = new QueryClient();


function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<Posts />} />
                <Route path="*" element={<Redirect />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:layout" element={<Posts />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/auth/:mode" element={<Auth />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </BrowserRouter>
    );
}


function Redirect() {
    window.location.href = "/";
    return null
}


const root = ReactDOM.createRoot(document.getElementById('id'))
root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <Router />
        </QueryClientProvider>
    </React.StrictMode>
);