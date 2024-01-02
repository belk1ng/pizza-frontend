import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://purpleschool.ru/pizza-api-demo",
  timeout: 1000,
});

export default axiosInstance;
