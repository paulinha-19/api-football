import { createContext, useState, useEffect, useMemo } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, getKeyLocalStorage, loginRequest, setUserLocalStorage, setKeyLocalStorage } from "../../components/utils/utilAuth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>(null);
    const [key, setKey] = useState<string | null>(null);
    const navigate = useNavigate();
    useEffect(() => {
        const user = getUserLocalStorage();
        const key = getKeyLocalStorage();
        if (user) {
            setUser(user)
        }
        if (key) {
            setKey(key);
        }
    }, []);

    const login = async (key: string) => {
        const response = await loginRequest(key);
        const { account } = response.response;
        setUser(account);
        setKey(key);
        setUserLocalStorage(account);
        setKeyLocalStorage(key);
    }

    const logout = async () => {
        setUser(null);
        setKey(null);
        setUserLocalStorage(null);
        setKeyLocalStorage(null);
        localStorage.removeItem("k");
        localStorage.removeItem("u");
        navigate("/");
    }

    // const values = useMemo(() => ({
    //     user,
    //     login,
    //     logout,
    // }), [user, login, logout]);

    return (
        <AuthContext.Provider value={{ user, login, logout, key }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider