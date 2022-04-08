import React from "react";
import { LoginProps } from "../Login/Login";

export const Register = ({ userInfo, setUserInfo }: LoginProps) => {
    const { username, email, password } = userInfo!;
    return (
        <div>
            <h1>Register</h1>
            <div>Username</div>
            <div className="form_input">
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={setUserInfo}
                />
            </div>
            <div>Email</div>
            <div className="form_input">
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={setUserInfo}
                />
            </div>
            <div>Password</div>
            <div className="form_input">
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={setUserInfo}
                />
            </div>
            <button onClick={() => console.log(password, username, email)}>
                Register
            </button>
        </div>
    );
};