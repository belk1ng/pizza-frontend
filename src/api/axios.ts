import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://purpleschool.ru/pizza-api-demo",
  timeout: 2000,
});

export default axiosInstance;
