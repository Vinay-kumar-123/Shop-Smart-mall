"use client";
import {createContext, useContext, useEffect, useState} from 'react';
import api from "../utils/api.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [authLoading, setAuthLoading] = useState(true);
    const fetch = async () => {
        try {
            setAuthLoading(true);
            const res = await api.get("/api/auth/me", {
                headers:{
                   Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
                
            });
            setUser(res.data.user);

        } catch  {
            setUser(null);
        } finally{
            setAuthLoading(false);
        }
    };

    useEffect(() => {
        fetch();
    }, []);

    return (
        <>
            <AuthContext.Provider value={{user, setUser, authLoading, refreshMe: fetch}}>
                {children}
            </AuthContext.Provider>
        </>
    )
}

export const useAuth = () => useContext(AuthContext);