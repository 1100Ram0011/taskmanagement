import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export const saveMessage = (data) => API.post("/messages", data);
export const getMessages = (chatId) => API.get(`/messages/${chatId}`);
