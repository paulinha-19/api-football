import { createContext, useState, useEffect } from "react";
import { IAuthProvider, IContext, IUser, ISubscription } from "./types";
import {
  getUserLocalStorage,
  getKeyLocalStorage,
  getSubscriptionLocalStorage,
  loginRequest,
  setUserLocalStorage,
  setKeyLocalStorage,
  setSubscriptionLocalStorage,
} from "../../utils/utilAuth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext<IContext>({} as IContext);

const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [subscription, setSubscription] = useState<ISubscription | null>(null);
  const [key, setKey] = useState<string | null>(null);
  const navigate = useNavigate();
  useEffect(() => {
    const user = getUserLocalStorage();
    const key = getKeyLocalStorage();
    const subscription = getSubscriptionLocalStorage();
    if (user) {
      setUser(user);
    }
    if (subscription) {
      setSubscriptionLocalStorage(subscription);
    }
    if (key) {
      setKey(key);
    }
  }, []);

  const login = async (key: string) => {
    const response = await loginRequest(key);
    console.log("response LOGIN PAGE", response);
    const { account, subscription } = response.response;
    setUser(account);
    setKey(key);
    setSubscription(subscription);
    setUserLocalStorage(account);
    setKeyLocalStorage(key);
    setSubscriptionLocalStorage(subscription);
  };

  const logout = async () => {
    setUser(null);
    setKey(null);
    setSubscription(null);
    setUserLocalStorage(null);
    setKeyLocalStorage(null);
    setSubscriptionLocalStorage(null);
    localStorage.removeItem("k");
    localStorage.removeItem("u");
    localStorage.removeItem("s");
    navigate("/");
  };

  // const values = useMemo(() => ({
  //     user,
  //     login,
  //     logout,
  // }), [user, login, logout]);

  return (
    <AuthContext.Provider value={{ user, login, logout, key, subscription }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
