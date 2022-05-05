import React from "react";
import { HomePage } from "../components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChatRoomPage } from "../components/ChatRoomPage/ChatRoomPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ChatRoomPage />} />
                <Route path="chat-room" element={<ChatRoomPage />} />
                <Route path="c" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;