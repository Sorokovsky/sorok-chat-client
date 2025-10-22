import { API_URL, BEARER_PREFIX, HEADER_NAME, TOKEN_KEY } from "@/constants/api";
import axios from "axios";

const httpClient = axios.create({
    baseURL: API_URL,
});

httpClient.interceptors.request.use(config => {
    const accessToken = localStorage.getItem(TOKEN_KEY) || " ";
    config.headers[HEADER_NAME] = `${BEARER_PREFIX}${accessToken}`
    return config;
}, config => {
    const accessToken = localStorage.getItem(TOKEN_KEY) || " ";
    config.headers[HEADER_NAME] = `${BEARER_PREFIX}${accessToken}`
    return config;
}
);

httpClient.interceptors.response.use(
    (config) => {
        const header: string = config.headers[HEADER_NAME.toLowerCase()] || " ";
        localStorage.setItem(TOKEN_KEY, header.replace(BEARER_PREFIX, ""));
        return config;
    },
    (config) => {
        const header: string = config.response.headers[HEADER_NAME.toLowerCase()] || " ";
        localStorage.setItem(TOKEN_KEY, header.replace(BEARER_PREFIX, ""));
        return config.response;
    }
);