import axios from "axios";

const API = axios.create({
    baseURL: "https://divyank-rana-4rym.vercel.app/api/auth"
});

export const register = (formData) => API.post("/api/auth/register", formData);
export const login = (formData) => API.post("/api/auth/login", formData);
