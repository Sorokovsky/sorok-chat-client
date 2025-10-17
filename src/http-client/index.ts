import axios, {AxiosInstance} from "axios";
import {ACCESS_TOKEN_KEY, API, AUTHORIZATION_HEADER, BEARER_PREFIX} from "@/constants/server.constants";

const httpClient: AxiosInstance = axios.create({
    baseURL: API,
});

httpClient.interceptors.request.use(request => {
    const accessToken = localStorage.getItem(ACCESS_TOKEN_KEY) || "";
    request.headers[AUTHORIZATION_HEADER] = `${BEARER_PREFIX} ${accessToken}`;
    return request;
});

httpClient.interceptors.response.use(response => {
    console.log(response)
    const accessToken = response.headers[AUTHORIZATION_HEADER];
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    return response;
}, response => {
    const accessToken: string = response.response.headers[AUTHORIZATION_HEADER.toLowerCase()];
    localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
    return response;
});

export const client: AxiosInstance = httpClient;