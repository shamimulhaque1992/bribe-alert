import axios from "axios";

const instance = axios.create({
  // baseURL: "https://apiaranya.etherstaging.xyz/public/api",
  baseURL: "https://apimave-dev.etherstaging.xyz/api",
  // baseURL: "https://apiaranya.jumriz.com/public/api",
  headers: {
    "Content-Type": "application/json",
    timeout: 1000,
  },
});

export default instance;
