import axios, { AxiosInstance } from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const apiClient: AxiosInstance = axios.create({
  baseURL: BASE_URL
});

apiClient.interceptors.request.use((request) => {
  return request;
});

export default apiClient;
