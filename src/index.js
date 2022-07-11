import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Post from "./containers/post";
import Posts from "./containers/posts";
import Auth from "./containers/auth";
import Base from "./containers/base";
import Settings from "./containers/settings";
import "./index.css";

const queryClient = new QueryClient();

ReactDOM.render(
    <QueryClientProvider client={queryClient}>
        <Router />
    </QueryClientProvider>,
    document.getElementById("root"),
);

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<Base />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:layout" element={<Posts />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/settings" element={<Settings />} />
            </Routes>
        </BrowserRouter>
    );
}
