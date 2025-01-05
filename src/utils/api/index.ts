import axios, {type AxiosInstance} from "axios";
import {onError, onRequest, onResponse} from "@/utils/api/interseptors/auth.interseptor";
import {API_URL} from "@/constants/common.constant";

export const api: AxiosInstance = axios.create({
    baseURL: API_URL,
    withCredentials: true,
});

api.interceptors.request.use(onRequest, onError);
api.interceptors.response.use(onResponse, onError)