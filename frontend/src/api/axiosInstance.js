import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:5000", //?  backend base url
});

//? what does this interceptor does it store session tokens in storage
axiosInstance.interceptors.request.use(
  (config) => {
    const accessToken = JSON.parse(sessionStorage.getItem("accessToken")) || "";

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  },
  (err) => Promise.reject(err)
);

export default axiosInstance;
