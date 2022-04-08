import React from "react";
import { InputValues } from "../../../../hooks/useForm";

export interface LoginProps {
    userInfo?: InputValues;
    setUserInfo?: (e: React.ChangeEvent<HTMLInputElement>) => InputValues;
}

export const Login = ({ setUserInfo, userInfo }: LoginProps) => {
    const { password, username } = userInfo!;
    return (
        <div>
            <h1>Login</h1>
            <div>Username</div>
            <div className="form_input">
                <input
                    type="text"
                    name="username"
                    onChange={setUserInfo}
                    value={username}
                />
            </div>
            <div>Password</div>
            <div className="form_input">
                <input
                    type="password"
                    name="password"
                    onChange={setUserInfo}
                    value={password}
                />
            </div>
            <button onClick={() => console.log(password, username)}>
                Login
            </button>
        </div>
    );
};
