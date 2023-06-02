import api from "../../services/api";
import { IUser, ISubscription } from "../../context/Auth/types";

export const setUserLocalStorage = (user: IUser | null) => {
  localStorage.setItem("u", JSON.stringify(user?.firstname));
};
export const getUserLocalStorage = () => {
  const json = localStorage.getItem("u");
  if (!json) {
    return null;
  }
  const user = JSON.parse(json);
  return user ?? null;
};

export const setSubscriptionLocalStorage = (
  subscription: ISubscription | null
) => {
  localStorage.setItem("s", JSON.stringify(subscription));
};
export const getSubscriptionLocalStorage = () => {
  const json = localStorage.getItem("s");
  if (!json) {
    return null;
  }
  const subscription = JSON.parse(json);
  return subscription ?? null;
};

export const setKeyLocalStorage = (key: string | null) => {
  localStorage.setItem("k", JSON.stringify(key));
};

export const getKeyLocalStorage = () => {
  const json = localStorage.getItem("k");
  if (!json) {
    return null;
  }
  const key = JSON.parse(json);
  return key ?? null;
};

export const loginRequest = async (key: string) => {
  try {
    api.defaults.headers.get["x-rapidapi-key"] = key;
    api.defaults.headers.get["x-rapidapi-host"] = import.meta.env.VITE_HOST;
    const response = await api.get("/status");
    const { results, errors } = response.data;
    if (results === 0 && errors) {
      alert(errors.token);
      return null;
    }
    return response.data;
  } catch (error) {
    return null;
  }
};

export const logout = async () => {};
