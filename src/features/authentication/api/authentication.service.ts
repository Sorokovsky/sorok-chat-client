import { ApiError } from "@/entities/api-error";
import { httpClient } from "@/shared";
import { AxiosResponse } from "axios";
import { PROFILE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, LOGOUT_ROUTE } from "../constants";
import type { User } from "../models";
import { LoginDto } from "../models/login";
import type { RegistrationDto } from "../models/registration"

class AuthenticationService {
    public async getProfile(): Promise<User> {
        const response = await httpClient.get<User>(PROFILE_ROUTE);
        return response.data;
    };

    public async login(loginDto: LoginDto): Promise<null | ApiError> {
        const response = await httpClient.put<unknown, AxiosResponse<void | ApiError>>(LOGIN_ROUTE, loginDto);
        return response.data as ApiError;        
    }

    public async registration(dto: RegistrationDto): Promise<User | ApiError> {
        const response = await httpClient.post<unknown, AxiosResponse<User | ApiError>>(REGISTRATION_ROUTE, dto);
        return response.data;
    }

    public async logout(): Promise<ApiError | null> {
        const response = await httpClient.delete(LOGOUT_ROUTE);
        return response.data ? response.data : null;
    };
};

export const authenticationService = new AuthenticationService();