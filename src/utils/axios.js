import axios from "axios"
import secureLocalStorage from "react-secure-storage"
import { STORAGE_KEY } from "./const"

const baseURL = import.meta.env.VITE_API_URL

const apiInstance = axios.create({
  baseURL,
  timeout: 3000
})

export const apiInstanceAuth = axios.create({
  baseURL,
  timeout: 3000
})

apiInstanceAuth.interceptors.request.use(
  (config) => {
    const session = secureLocalStorage.getItem(STORAGE_KEY)

    // ✅ session HARUS ADA
    if (session?.token) {
      config.headers.Authorization = `JWT ${session.token}`
    }

    // 🔴 WAJIB SELALU RETURN CONFIG
    return config
  },
  (error) => Promise.reject(error)
)

export default apiInstance
