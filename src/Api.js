import axios from 'axios';

const api = axios.create({
  baseURL: 'https://aws-task-pfxn.onrender.com/',
  headers: {
    'Content-Type': 'application/json',
  }
});

export default api;
