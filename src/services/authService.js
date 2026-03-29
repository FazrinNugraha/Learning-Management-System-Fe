import apiInstance from "../utils/axios";
import { apiInstanceAuth } from "../utils/axios";

export const postSignUp = async(data) => apiInstance.post("/sign-up", data).then((res)=>res.data)
export const postSignIn = async(data) => apiInstance.post("/sign-in", data).then(res=>res.data)

// Validasi token ke server — return user data kalau token masih valid
export const getMe = async() => apiInstanceAuth.get("/me").then(res=>res.data)
