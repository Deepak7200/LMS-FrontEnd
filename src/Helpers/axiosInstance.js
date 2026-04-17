import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL; // 5014 -> backend port

const axiosInstance = axios.create();

axiosInstance.defaults.baseURL = BASE_URL;
axiosInstance.defaults.withCredentials = true;
// there exists multiple other functionality like "timeout" means, if anyone data didn't fetch at specifit time then it return;

export default axiosInstance;