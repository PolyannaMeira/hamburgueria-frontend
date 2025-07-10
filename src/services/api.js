import axios from "axios";

/**
 * Axios instance configured with the backend base URL
 */
export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

/**
 * Request interceptor
 * 
 * - Adds Authorization header only if user has a token
 * - Ensures public routes (like /categories, /products) do NOT send empty or "Bearer null"
 */
api.interceptors.request.use((config) => {
  const userData = localStorage.getItem("devburger:userData");

  if (userData) {
    const token = JSON.parse(userData).token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }

  return config;
});
