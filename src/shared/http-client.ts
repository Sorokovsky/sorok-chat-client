import { API_URL, BEARER_PREFIX, HEADER_NAME, TOKEN_KEY } from "@/shared/api";
import axios from "axios";

const client = axios.create({
    baseURL: API_URL,
});

client.interceptors.request.use(config => {
    const accessToken = localStorage.getItem(TOKEN_KEY) || " ";
    config.headers[HEADER_NAME] = `${BEARER_PREFIX}${accessToken}`
    return config;
}, config => {
    const accessToken = localStorage.getItem(TOKEN_KEY) || " ";
    config.headers[HEADER_NAME] = `${BEARER_PREFIX}${accessToken}`
    return config;
}
);

client.interceptors.response.use(
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

export const httpClient = client;