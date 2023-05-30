import axios from 'axios';
import { getKeyLocalStorage } from '../components/utils/utilAuth';

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "x-rapidapi-host": import.meta.env.VITE_HOST
  }
});

api.interceptors.request.use(config => {
  const key = getKeyLocalStorage();
  if (key) {
    config.headers["x-rapidapi-key"] = key;
  }
  return config;
},
  error => {
    return Promise.reject(error);
  }
);

export default api;
