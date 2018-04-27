import axios from 'axios';

const api = axios.create({
  baseURL: 'http://172.22.191.193:3000',
});

export default api;
