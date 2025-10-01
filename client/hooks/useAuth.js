"use client";
import { useSelector, useDispatch } from "react-redux";
import { 
    loginUser ,
    signupUser,
    logoutUser,
    fetchUser,
    refreshToken,
} from "@/redux/slices/authSlice";


export const useAuth = () => {
    const dispatch = useDispatch();
    const {user, loading, error, token } = useSelector((state) => state.auth);
    const login = (credentials) => dispatch(loginUser(credentials));
    const signup = (data) => dispatch(signupUser(data));
    const signout = () => dispatch(logoutUser());
    const getUser = () => dispatch(fetchUser());
    const refresh = () => dispatch(refreshToken());
    return { user, token, loading, error, login, signup, signout, getUser, refresh };
};