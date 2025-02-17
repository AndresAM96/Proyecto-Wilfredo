import axios from 'axios';
// Remove dotenv import and configuration as it's not needed in the frontend

const api = axios.create({
  baseURL: 'http://localhost:8080/api',
});

export default api;