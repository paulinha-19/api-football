import { createContext, useState, useEffect } from "react";
import { IAuthProvider, IContext, IUser } from "./types";
import { getUserLocalStorage, loginRequest, setUserLocalStorage } from "./util";

export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider = ({ children }: IAuthProvider) => {
    const [user, setUser] = useState<IUser | null>(null);
    useEffect(() => {
        const user = getUserLocalStorage();
        if (user) {
            setUser(user)
        }
    }, []);

    const login = async (key: string) => {
        const response = await loginRequest(key);
        const { account } = response.response;
        setUser(account);
        setUserLocalStorage(account);
    }

    const logout = async () => {
        console.log("signout está sendo executada.");
        setUser(null);
        setUserLocalStorage(null);
        window.location.href = window.location.href;
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider