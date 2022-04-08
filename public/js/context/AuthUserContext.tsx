import React from "react";
import { createContext, ReactNode, useMemo, useState } from "react";
import { useForm } from "../hooks/useForm";

export interface ChlidrenProp {
    children: ReactNode;
}

export const AuthUserContext = createContext({});

export const AuthUserProvider = ({ children }: ChlidrenProp) => {
    //username ce rabiti biti unique umisto emaila
    const [userInfo, setUserInfo] = useForm({
        username: "",
        password: "",
        email: "",
    });
    const [guest, setGuest] = useState(false);
    //login
    //register
    //logout
    const memoizedUserInfo = useMemo(
        () => ({
            //login
            //register
            //logout
            guest,
            setGuest,
            userInfo,
            setUserInfo,
        }),
        [userInfo, setUserInfo, guest, setGuest]
    );
    return (
        <AuthUserContext.Provider value={memoizedUserInfo}>
            {children}
        </AuthUserContext.Provider>
    );
};
