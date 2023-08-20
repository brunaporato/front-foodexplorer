import axios from "axios";

export const api = axios.create({
  baseURL: "https://foodexplorer-api-mscd.onrender.com"
});