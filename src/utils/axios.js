import axios from "axios";

const basaeURL  = import.meta.env.VITE_API_URL

const apiInstance = axios.create({
    basaeURL,
    timeout: 3000
})

export default apiInstance