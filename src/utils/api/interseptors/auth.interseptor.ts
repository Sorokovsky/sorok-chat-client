import {type AxiosResponse, type InternalAxiosRequestConfig} from "axios";
import { accessTokenStorageService } from "@/services/access-token-storage.service";
import {AUTH_HEADER_KEY, BEARER_PREFIX} from "@/constants/common.constant";
import {isBearerAuth} from "@/utils/is-bearer-auth";

export const onRequest = (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const { headers } = config;
    const accessToken: string | null = accessTokenStorageService.get();
    if(accessToken !== null) {
        headers.setAuthorization(`${BEARER_PREFIX}${accessToken}`, true);
    }
    return config;
}

export const onResponse = (response: AxiosResponse): AxiosResponse => {
    const { headers } = response;
    const authorization: string = headers[AUTH_HEADER_KEY];
    if(isBearerAuth(authorization)) {
        accessTokenStorageService.set(authorization.replace(BEARER_PREFIX, ''));
    }
    return response;
};