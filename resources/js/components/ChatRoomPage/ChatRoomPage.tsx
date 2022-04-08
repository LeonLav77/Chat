import React from "react";
import useAuth from "../../hooks/useAuth";
import { Chat } from "./Chat/Chat";

export const ChatRoomPage = () => {
    const { guest } = useAuth();
    return (
        <div>
            {guest && (
                <h3>Username: Guest{Date.now().toString().slice(1, 6)}</h3>
            )}
            <Chat />
        </div>
    );
};