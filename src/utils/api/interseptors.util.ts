import {AUTHORIZATION_KEY, BEARER_PREFIX} from "@/constants/api.constants";
import {bearerTokenService} from "@/services/bearer-token.service";
import type {ApiError} from "@/types/models/error/api-error.type";
import type {AxiosError, AxiosHeaderValue, AxiosResponse, InternalAxiosRequestConfig} from "axios";

export const onRequest = (request: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    const authorization: string = `${BEARER_PREFIX}${bearerTokenService.get()}`;
    request.headers.set(AUTHORIZATION_KEY, authorization);
    return request;
}

export const onResponse = (response: AxiosResponse): AxiosResponse => {
    const authorization: AxiosHeaderValue | undefined = response.headers[AUTHORIZATION_KEY];
    if (typeof authorization === "string") {
        const token = authorization.replaceAll(BEARER_PREFIX, "");
        bearerTokenService.set(token);
    }
    return response;
}

export const onRequestError = (error: AxiosError<ApiError>) => {
    throw error.request?.data;
}

export const onResponseError = (error: AxiosError<ApiError>) => {
    throw error.response?.data;
};