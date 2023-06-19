import axios from "axios";

const api = axios.create({
  baseURL: "https://localhost:7094/v1",
  headers: {
    Accept: "application/json, text/plain, */*",
    "Content-Type": "application/problem+json; charset=utf-8",
  },
});

export default api;
