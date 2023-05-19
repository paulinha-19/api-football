import api from "../../services/api";
import { IUser } from "./types";

export const setUserLocalStorage = (user: IUser | null) => {
    localStorage.setItem("u", JSON.stringify(user));
}

export const getUserLocalStorage = () => {
    const json = localStorage.getItem("u");
    if (!json) {
        return null;
    }
    const user = JSON.parse(json)
    return user ?? null;
}

export const loginRequest = async (key: string) => {
    try {
        api.defaults.headers.common['x-rapidapi-key'] = key;
        api.defaults.headers.common['x-rapidapi-host'] = import.meta.env.VITE_HOST
        const response = await api.get('/status');
        const { results, errors } = response.data;
        if (results === 0 && errors) {
            alert(errors.token)
            return null;
            throw new Error(errors.token);
        }
        return response.data;
    } catch (error) {
        return null;
    }
}

export const logout = async () => {
    
}
