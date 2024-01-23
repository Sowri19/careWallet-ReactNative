import axios from 'axios';
import { apiConfig } from '../config/config';

const axiosInstance = axios.create({
  baseURL: apiConfig.baseUrl,
  withCredentials: true,
});


export default axiosInstance;
