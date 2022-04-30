import axios from "axios";

const API_URL = "http://localhost:5000";

export const API_INSTANCE = axios.create({
  baseURL: API_URL,
});
