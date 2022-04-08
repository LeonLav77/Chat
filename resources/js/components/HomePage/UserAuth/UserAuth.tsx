import React from "react";
import useAuth from "../../../hooks/useAuth";
import { Login } from "./Login/Login";
import { Register } from "./Register/Register";

export const UserAuth = () => {
    const { userInfo, setUserInfo } = useAuth();
    //login || register
    return (
        <div className="auth_form_container">
            <h1>Super Chat App</h1>
            {true ? (
                <Login userInfo={userInfo} setUserInfo={setUserInfo} />
            ) : (
                <Register />
            )}
        </div>
    );
};