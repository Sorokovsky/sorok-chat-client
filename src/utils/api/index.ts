import { API_PREFIX, SERVER_PREFIX } from '@/constants/api.constants';
import type { AxiosInstance } from "axios";
import axios from "axios";
import { onRequest, onRequestError, onResponse, onResponseError } from "./interseptors.util";

const api: AxiosInstance = axios.create({
    baseURL: SERVER_PREFIX + API_PREFIX,
});
api.interceptors.request.use(onRequest, onRequestError);
api.interceptors.response.use(onResponse, onResponseError);
export default api;