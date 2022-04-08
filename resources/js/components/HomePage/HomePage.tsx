import React from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { UserAuth } from "./UserAuth/UserAuth";

export const HomePage = () => {
    const navigate = useNavigate();
    const { setGuest } = useAuth();
    return (
        <div>
            <UserAuth />
            <button
                onClick={() => {
                    navigate("/chat-room");
                    setGuest!(true);
                }}
            >
                Continue As Guest
            </button>
        </div>
    );
};