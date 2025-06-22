import axios from "axios";

const API_URL = "https://task-manager-mern-f18l.onrender.com/tasks";

export const getTasks = () => axios.get(API_URL);
export const createTask = (data) => axios.post(API_URL, data);
export const updateTask = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteTask = (id) => axios.delete(`${API_URL}/${id}`);
